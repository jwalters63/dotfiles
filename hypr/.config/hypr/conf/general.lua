hl.config({
    general = {
        gaps_in = 5,
        gaps_out = 20,
        border_size = 2,
        col = {
            active_border   = { colors = {"rgb(7e2553)", "rgb(ff004d)"}, angle = 45 },
            inactive_border = "rgba(595959aa)",
        },
        layout = "dwindle",
        resize_on_border = true,
    },

    render = {
        direct_scanout = true,
    },
})

hl.env("XDG_DATA_DIRS", "/usr/share:/usr/local/share:~/.local/share:/var/lib/flatpak/exports/share:~/.local/share/flatpak/exports/share")
hl.env("MESA_SHADER_CACHE_MAX_SIZE", "10G")
