function vid_wa --description 'Convierte video a H.264 para WhatsApp'
    set input $argv[1]
    
    # Validación de argumentos
    if test -z "$input"
        echo "Error: Falta el archivo de entrada."
        echo "Uso: vid_wa <video_entrada>"
        return 1
    end

    # Extrae el nombre base y le añade _wa.mp4
    set output (string replace -r '\.[^.]+$' '' $input)_wa.mp4

    echo "Procesando: $input -> $output"
    
    # Ejecuta el comando optimizado
    ffmpeg -i $input -c:v libx264 -profile:v high -pix_fmt yuv420p -preset fast -crf 24 -c:a aac -b:a 128k -movflags +faststart $output
    
    echo "Conversión finalizada: $output"
end
