import app from "ags/gtk4/app"
import { execAsync } from "ags/process"
import { Astal, Gtk } from "ags/gtk4"
import WifiTile from "./WifiTile"
import MediaTile from "./MediaTile"
import BluetoothTile from "./BluetoothTile"
import BluetoothMenu from "./BluetoothMenu"
import MicSlider from "./MicSlider"
import VolumeSlider from "./VolumeSlider"
import QuickActions from "./QuickActions"
import AppLauncher from "./AppLauncher"
import WifiMenu from "./WifiMenu"
import PowerMenu from "./PowerMenu"
import { activeTab } from "./state"

export default function ControlCenter() {
  const { TOP, LEFT } = Astal.WindowAnchor

  // ── Dynamic Stack (AppLauncher / PowerMenu / WifiMenu) ──
  const stack = new Gtk.Stack({
    transitionType: Gtk.StackTransitionType.CROSSFADE,
    transitionDuration: 200,
  })
  
  const appLauncher = AppLauncher()
  stack.add_named(appLauncher, "apps")
  stack.add_named(<PowerMenu />, "power")
  stack.add_named(<WifiMenu />, "wifi")
  stack.add_named(<BluetoothMenu />, "bluetooth")
  
  // Bind stack visibility to the activeTab state
  activeTab.subscribe((val) => {
    stack.set_visible_child_name(val)
  })

  // The main UI box
  const mainBox = (
    <box class="cc-panel" orientation={Gtk.Orientation.VERTICAL} spacing={8}>
      
      {/* ── Fixed Proportion Content ── */}
      <box orientation={Gtk.Orientation.VERTICAL} spacing={8}>
        {/* ── Row 1 + 2: Connectivity (left) + Media (right) ── */}
        <box orientation={Gtk.Orientation.HORIZONTAL} spacing={8}>
          {/* Left column: Wi-Fi tile + BT row */}
          <box orientation={Gtk.Orientation.VERTICAL} spacing={8}>
            <WifiTile />
            <box orientation={Gtk.Orientation.HORIZONTAL} spacing={8}>
              <BluetoothTile />
              {/* AirDrop-equivalent — mismo vidrio, círculo */}
              <button 
                class="tile tile-circle" 
                widthRequest={72} 
                heightRequest={72}
                onClicked={() => {
                  execAsync(["bash", "-c", "missioncenter &"]).catch(() => {})
                  app.get_window("control-center")?.set_visible(false)
                }}
              >
                <image
                  iconName="cpu-symbolic"
                  pixelSize={24}
                  halign={Gtk.Align.CENTER}
                  valign={Gtk.Align.CENTER}
                />
              </button>
            </box>
          </box>

          {/* Right column: Media player tile */}
          <MediaTile />
        </box>

        {/* ── Sliders ── */}
        <MicSlider />
        <VolumeSlider />

        {/* ── Quick Actions ── */}
        <QuickActions />
      </box>

      {/* ── Dynamic Bottom Content ── */}
      <box css="margin-top: 8px;">
        {stack}
      </box>
    </box>
  )

  // The main window (Layer OVERLAY)
  const mainWindow = (
    <window
      name="control-center"
      application={app}
      visible
      anchor={Astal.WindowAnchor.TOP | Astal.WindowAnchor.LEFT}
      keymode={Astal.Keymode.ON_DEMAND}
      layer={Astal.Layer.TOP}
      exclusivity={Astal.Exclusivity.NORMAL}
      $={(self) => {
        const keyCtrl = new Gtk.EventControllerKey()
        keyCtrl.connect("key-pressed", (ctrl, keyval) => {
          if (keyval === 65307) { // Esc
            // Start close animation
            if (self.child && (self.child as any).closePanel) {
              ;(self.child as any).closePanel()
            } else {
              self.set_visible(false)
            }
            return true
          }
          if (keyval >= 0x20 && keyval <= 0x7e) {
            if (activeTab.get() !== "apps") {
              activeTab.set("apps")
              ;(appLauncher as any).focusSearch()
            }
          }
          return false
        })
        self.add_controller(keyCtrl)

        self.connect("notify::visible", () => {
          if (self.visible) {
            activeTab.set("apps")
            setTimeout(() => {
              ;(appLauncher as any).focusSearch()
            }, 50)
            if (self.child && (self.child as any).openPanel) {
              ;(self.child as any).openPanel()
            }
          } else {
            ;(appLauncher as any).clearSearch()
          }
        })
      }}
    >
      <box
        hexpand
        vexpand
        $={(self) => {
          // Manual click-away catcher and revealer to avoid JSX overlay issues
          const overlay = new Gtk.Overlay()
          
          const bgBtn = new Gtk.Button({
            cssClasses: ["bg-btn"],
            hexpand: true,
            vexpand: true,
          })
          
          const revealer = new Gtk.Revealer({
            transitionType: Gtk.RevealerTransitionType.SLIDE_RIGHT,
            transitionDuration: 200,
            revealChild: false,
            halign: Gtk.Align.START,
            valign: Gtk.Align.START,
          })
          
          revealer.set_child(mainBox)

          // Custom methods to handle animation
          ;(self as any).openPanel = () => {
            revealer.revealChild = true
          }
          ;(self as any).closePanel = () => {
            revealer.revealChild = false
            setTimeout(() => {
              app.get_window("control-center")?.set_visible(false)
            }, 200)
          }

          bgBtn.connect("clicked", () => {
            ;(self as any).closePanel()
          })

          overlay.set_child(bgBtn)
          overlay.add_overlay(revealer)
          self.append(overlay)
        }}
      />
    </window>
  )

  return mainWindow
}
