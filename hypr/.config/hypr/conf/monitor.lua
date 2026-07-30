hl.monitor({
    output   = "HDMI-A-1",
    mode     = "1600x900@60",
    position = "0x0",
    scale    = "1",
    vrr      = 0,
})

hl.monitor({
    output   = "DP-3",
    mode     = "1920x1080@120",
    position = "1600x0",
    scale    = "1",
    vrr      = 1,
})

hl.workspace_rule({ workspace = 1, monitor = "DP-3", default = true })
hl.workspace_rule({ workspace = 2, monitor = "DP-3" })
hl.workspace_rule({ workspace = 3, monitor = "DP-3" })
hl.workspace_rule({ workspace = 4, monitor = "DP-3" })
hl.workspace_rule({ workspace = 5, monitor = "DP-3" })

hl.workspace_rule({ workspace = 6, monitor = "HDMI-A-1", default = true })
hl.workspace_rule({ workspace = 7, monitor = "HDMI-A-1" })
hl.workspace_rule({ workspace = 8, monitor = "HDMI-A-1" })
hl.workspace_rule({ workspace = 9, monitor = "HDMI-A-1" })
hl.workspace_rule({ workspace = 10, monitor = "HDMI-A-1" })
