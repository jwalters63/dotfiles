hl.env("XCURSOR_THEME", "Posy_Cursor_Mono")
hl.env("XCURSOR_SIZE", "24")

hl.env("HYPRCURSOR_THEME", "Posy_Cursor_Mono")
hl.env("HYPRCURSOR_SIZE", "24")

os.execute("hyprctl setcursor Posy_Cursor_Mono 24 &")
os.execute("gsettings set org.gnome.desktop.interface cursor-theme 'Posy_Cursor_Mono' &")
