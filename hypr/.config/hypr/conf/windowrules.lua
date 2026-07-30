hl.window_rule({
    name = "panel_diagnostico",
    match = { class = "^(popup-fetch)$" },
    float = true,
    size = "900 380",
})

hl.layer_rule({
    name = "blur-waybar",
    match = { namespace = "^waybar$" },
    blur = false,
    ignore_alpha = 0.02,
})

hl.layer_rule({
    name = "blur-liquid-dock",
    match = { namespace = "^liquid-dock$" },
    blur = true,
    ignore_alpha = 0.2,
})

hl.layer_rule({
    name = "rules-rofi",
    match = { namespace = "^rofi$" },
    no_anim = true,
})

hl.layer_rule({
    name = "swaync_control_blur",
    match = { namespace = "^swaync-control-center$" },
    animation = "slide right",
})

hl.layer_rule({
    name = "nwg_dock_rules",
    match = { namespace = "^nwg-dock$" },
    blur = true,
    ignore_alpha = 0.04,
    animation = "slide bottom",
})

hl.layer_rule({
    name = "swaync_center",
    match = { namespace = "^swaync-control-center$" },
    blur = true,
    ignore_alpha = 0.5,
})

hl.layer_rule({
    name = "swaync_notif",
    match = { namespace = "^swaync-notification-window$" },
    blur = true,
    ignore_alpha = 0.1,
})
