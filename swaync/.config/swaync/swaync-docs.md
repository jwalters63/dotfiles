swaync(1)                                                                         General Commands Manual                                                                        swaync(1)

NAME
     swaync - A simple notification daemon with a GTK gui for notifications and the control center

USAGE
     swaync [option]

OPTIONS
     -h, --help
         Show help options

     -v, --version
         Prints version

     -s, --style <CSS file>
         Use a custom Stylesheet file

     --replace
         Replace the currently running instance of SwayNotificationCenter

     --skip-system-css
         Skip trying to parse the packaged Stylesheet file. Useful for CSS debugging

     --custom-system-css
         Pick a custom CSS file to use as the "system" CSS. Useful for CSS debugging

     -c, --config <Config file>
         Use a custom config file

Control Center Keyboard Shortcuts
     Up/Down: Navigate notifications

     Home: Navigate to the latest notification

     End: Navigate to the oldest notification

     Escape/Caps_Lock: Close notification panel

     Return: Execute default action or close notification if none

     Delete/BackSpace: Close notification

     Shift+C: Close all notifications

     Shift+D: Toggle Do Not Disturb

     Buttons 1-9: Execute alternative actions

     Left click button / actions: Activate notification action

     Middle/Right click notification: Close notification

CONFIGURATION
     The main config file is located in /etc/xdg/swaync/config.json. Copy it over to your ~/.config/swaync/ folder to customize without needing root access.

     To reload the config, you'll need to run swaync-client --reload-config

     For information on the config file format, see swaync(5)

Scripting
     Scripting rules and logic:

     1.  Only one script can be fired per notification
     2.  Each script requires ‘exec‘ and at least one of the other properties
     3.  All listed properties must match the notification for the script to be ran
     4.  If any of the properties doesn't match, the script will be skipped
     5.  If a notification doesn't include one of the properties, that property will be skipped

     Notification information can be printed into a terminal by running G_MESSAGES_DEBUG=all swaync (when a notification appears).

     Config properties:

         {
              "scripts": {
                   "example-script": {
                        "exec": "Your shell command or script here...",
                        "app-name": "Notification app-name Regex",
                        "summary": "Notification summary Regex",
                        "body": "Notification body Regex",
                        "urgency": "Low or Normal or Critical",
                        "category": "Notification category Regex"
                   }
              }
              other non scripting properties...
         }

     config.json example:

         {
              "scripts": {
                   // This script will only run when Spotify sends a notification containing
                   // that exact summary and body
                   "example-script": {
                        "exec": "~/.config/swaync/myRickRollScript.sh",
                        "app-name": "Spotify"
                        "summary": "Never Gonna Give You Up",
                        "body": "Rick Astley - Whenever You Need Somebody"
                   }
              }
              other non scripting properties...
         }

   Disable scripting
     To completely disable scripting, the project needs to be built like so:

         meson build -Dscripting=false
         ninja -C build
         meson install -C build

Waybar Example
     This example requires NotoSansMono Nerd Font to get the icons looking right

     Waybar config

         "custom/notification": {
              "tooltip": false,
              "format": "{icon}",
              "format-icons": {
                   "notification": "<span foreground='red'><sup></sup></span>",
                   "none": "",
                   "dnd-notification": "<span foreground='red'><sup></sup></span>",
                   "dnd-none": "",
                   "inhibited-notification": "<span foreground='red'><sup></sup></span>",
                   "inhibited-none": "",
                   "dnd-inhibited-notification": "<span foreground='red'><sup></sup></span>",
                   "dnd-inhibited-none": ""
              },
              "return-type": "json",
              "exec-if": "which swaync-client",
              "exec": "swaync-client -swb",
              "on-click": "swaync-client -t -sw",
              "on-click-right": "swaync-client -d -sw",
              "escape": true
         },

     Waybar css file

         #custom-notification {
              font-family: "NotoSansMono Nerd Font";
         }

                                                                                        2026-03-26                                                                               swaync(1)
swaync-client(1)                                                                  General Commands Manual                                                                 swaync-client(1)

NAME
     swaync-client - Client executable

USAGE
     swaync-client [option]

OPTIONS
     -h, --help
         Show help options

     -v, --version
         Prints version

     -R, --reload-config
         Reload the config file

     -rs, --reload-css
         Reload the css file. Location change requires restart

     -t, --toggle-panel
         Toggle the notification panel

     -op, --open-panel
         Opens the notification panel

     -cp, --close-panel
         Closes the notification panel

     -d, --toggle-dnd
         Toggle and print the current dnd state

     -D, --get-dnd
         Print the current dnd state

     -dn, --dnd-on
         Turn dnd on and print the new dnd state

     -df, --dnd-off
         Turn dnd off and print the new dnd state

     -I, --get-inhibited
         Print if currently inhibited or not

     -In, --get-num-inhibitors
         Print number of inhibitors

     -Ia, --inhibitor-add [APP_ID]
         Add an inhibitor

     -Ir, --inhibitor-remove [APP_ID]
         Remove an inhibitor

     -Ic, --inhibitors-clear
         Clears all inhibitors

     -c, --count
         Print the current notification count

     --hide-latest
         Hides latest notification. Still shown in Control Center

     --hide-all
         Hides all notifications. Still shown in Control Center

     --close-latest
         Closes latest notification

     -C, --close-all
         Closes all notifications

     -a, --action [ACTION_INDEX]
         Invokes the action [ACTION_INDEX] (or 0) of the latest notification

     -sw, --skip-wait
         Doesn't wait when swaync hasn't been started

     -s, --subscribe
         Subscribe to notification add and close events

     -swb, --subscribe-waybar
         Subscribe to notification add and close events with waybar support. Read README for example

     --change-cc-monitor
         Changes the preferred control center monitor (resets on config reload)

     --change-noti-monitor
         Changes the preferred notification monitor (resets on config reload)

                                                                                        2026-03-26                                                                        swaync-client(1)
