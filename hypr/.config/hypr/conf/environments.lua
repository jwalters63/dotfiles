hl.env("AQ_DRM_DEVICES", "/dev/dri/card1")
hl.env("WLR_DRM_DEVICES", "/dev/dri/card1")

hl.env("XDG_CURRENT_DESKTOP", "Hyprland")
hl.env("XDG_SESSION_TYPE", "wayland")
hl.env("XDG_SESSION_DESKTOP", "Hyprland")

hl.env("QT_QPA_PLATFORM", "wayland;xcb")
hl.env("QT_QPA_PLATFORMTHEME", "qt6ct")
hl.env("QT_WAYLAND_DISABLE_WINDOWDECORATION", "1")
hl.env("QT_AUTO_SCREEN_SCALE_FACTOR", "1")

hl.env("GDK_SCALE", "1")

hl.env("MOZ_ENABLE_WAYLAND", "1")

hl.env("XCURSOR_SIZE", "24")

hl.env("APPIMAGELAUNCHER_DISABLE", "1")

hl.env("OZONE_PLATFORM", "wayland")
