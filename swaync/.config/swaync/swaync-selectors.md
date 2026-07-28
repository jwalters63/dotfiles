# Official SwayNC GTK3 CSS Selectors Map

## Core Containers
- `.control-center`: Main window container.
- `.control-center-list`: Scrollable container holding widgets/notifications.
- `.notification-row`: Individual notification wrapper.
- `.notification`: Notification item.

## Volume Widget (`"volume"`)
- `.widget-volume`: Container platter for volume.
- `.widget-volume scale`: The slider element.
- `scale trough`: Inactive slider track background.
- `scale highlight`: Active slider filled track.
- `scale slider`: The draggable knob circle.

## MPRIS Widget (`"mpris"`)
- `.widget-mpris`: Container platter for media player.
- `.widget-mpris-player`: Individual player instance.
- `.widget-mpris-album-art`: Album art image node.
- `.widget-mpris-title`: Track title label.
- `.widget-mpris-subtitle`: Artist/Album label.

## Buttons Grid Widget (`"buttons-grid"`)
- `.widget-buttons-grid`: Container platter for buttons grid.
- `.widget-buttons-grid flowboxchild button`: Individual toggle button.
- `.widget-buttons-grid flowboxchild button.toggle:checked`: Active/ON state button.

## Notifications Stream (`"notifications"`)
- `.widget-notifications`: Container holding the stream of past notifications.
- `.notification-content`: Text and icon container inside a notification.
- `.summary`: Title of the notification.
- `.body`: Body text of the notification.
