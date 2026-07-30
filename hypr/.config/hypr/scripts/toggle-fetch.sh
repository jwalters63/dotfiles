if hyprctl clients -j | grep -q '"class": "popup-fetch"'
    hyprctl dispatch closewindow class:popup-fetch
else
    kitty --class popup-fetch -o confirm_os_window_close=0 -o background_opacity=1 -o tab_bar_min_tabs=2 -e fish -c "tput civis; clear; fastfetch -c config-fastfetch.jsonc; sleep infinity" &
end
