#include <gtk/gtk.h>
#include <gtk-layer-shell/gtk-layer-shell.h>
#include <cairo.h>

#define IMAGE_PATH "/home/jwalters/.config/waybar/assets/waybar_shadow.png"
#define HEIGHT 70

static cairo_surface_t *image_surface = NULL;

static gboolean on_draw_event(GtkWidget *widget, cairo_t *cr, gpointer user_data) {
    if (!image_surface) return FALSE;

    GtkAllocation allocation;
    gtk_widget_get_allocation(widget, &allocation);

    cairo_set_source_rgba(cr, 0, 0, 0, 0);
    cairo_set_operator(cr, CAIRO_OPERATOR_SOURCE);
    cairo_paint(cr);

    cairo_set_operator(cr, CAIRO_OPERATOR_OVER);

    double image_width = cairo_image_surface_get_width(image_surface);
    double image_height = cairo_image_surface_get_height(image_surface);
    
    cairo_scale(cr, (double)allocation.width / image_width, (double)allocation.height / image_height);

    cairo_set_source_surface(cr, image_surface, 0, 0);
    cairo_paint(cr);

    return FALSE;
}

void create_shadow_window_for_monitor(GdkMonitor *monitor) {
    GtkWidget *window = gtk_window_new(GTK_WINDOW_TOPLEVEL);

    gtk_layer_init_for_window(GTK_WINDOW(window));
    gtk_layer_set_monitor(GTK_WINDOW(window), monitor);
    gtk_layer_set_layer(GTK_WINDOW(window), GTK_LAYER_SHELL_LAYER_BOTTOM);
    
    gtk_layer_set_anchor(GTK_WINDOW(window), GTK_LAYER_SHELL_EDGE_TOP, TRUE);
    gtk_layer_set_anchor(GTK_WINDOW(window), GTK_LAYER_SHELL_EDGE_LEFT, TRUE);
    gtk_layer_set_anchor(GTK_WINDOW(window), GTK_LAYER_SHELL_EDGE_RIGHT, TRUE);

    gtk_layer_set_exclusive_zone(GTK_WINDOW(window), -1);

    GdkScreen *screen = gtk_widget_get_screen(window);
    GdkVisual *visual = gdk_screen_get_rgba_visual(screen);
    if (visual) {
        gtk_widget_set_visual(window, visual);
    }
    gtk_widget_set_app_paintable(window, TRUE);

    GtkWidget *drawing_area = gtk_drawing_area_new();
    gtk_container_add(GTK_CONTAINER(window), drawing_area);
    gtk_widget_set_size_request(drawing_area, -1, HEIGHT);

    g_signal_connect(G_OBJECT(drawing_area), "draw", G_CALLBACK(on_draw_event), NULL);

    gtk_widget_show_all(window);
}

int main(int argc, char *argv[]) {
    gtk_init(&argc, &argv);

    image_surface = cairo_image_surface_create_from_png(IMAGE_PATH);
    if (cairo_surface_status(image_surface) != CAIRO_STATUS_SUCCESS) {
        return 1;
    }

    GdkDisplay *display = gdk_display_get_default();
    int n_monitors = gdk_display_get_n_monitors(display);

    // Asigna cada ventana al monitor exacto mediante su puntero GdkMonitor
    for (int i = 0; i < n_monitors; i++) {
        GdkMonitor *monitor = gdk_display_get_monitor(display, i);
        create_shadow_window_for_monitor(monitor);
    }

    gtk_main();

    if (image_surface) cairo_surface_destroy(image_surface);

    return 0;
}
