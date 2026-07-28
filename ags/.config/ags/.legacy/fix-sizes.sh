#!/bin/bash
# We will use sed to strip padding and min-width from the CSS and enforce it strictly.
sed -i 's/min-width:.*//g' /home/jwalters/.config/ags/style.scss
sed -i 's/min-height:.*//g' /home/jwalters/.config/ags/style.scss
sed -i 's/padding:.*//g' /home/jwalters/.config/ags/style.scss
