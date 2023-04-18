# Declaramos una variable
try:
    archivo = open('prueba.txt', 'w', encoding='utf8') # La w es de write, que significa escribir
    archivo.write('Programamos con diferentes tipos de archivos, ahora en txt.\n')
    archivo.write('Los acentos son importantes para las palaras,\n')
    archivo.write('como por ejemplo: acción, ejecución y producción.\n')
    archivo.write('Las letras son:\n r read (leer),\n a append (anexa),\n w write (escribir),\n x (crea un archivo),\n')
    archivo.write('\nt (es para texto, \nb (archivo binarios, \nw+ (leer y escribir), \nr+ (escribir y leer) \n')
    archivo.write('Saludo a todos los alumnos de la Tecnicatura\n')
    archivo.write('Con esto te rminamos')
except Exception as e:
    print(e)
finally: # Siempre se ejecuta
    archivo.close() # Con esto se debe cerrar el achivo
# archivo.write('Todo quedó perfecto') # este es un error porque el archivo está cerrado (finally)
