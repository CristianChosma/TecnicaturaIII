
archivo = open('prueba.txt', 'r', encoding='utf8') # las letras son r(read), a(append), w(write), x
#print(archivo.read())
#print(archivo.read(16))
#print(archivo.read(10)) #continuamos desde la línea anerior
#print(archivo.readline())
#print(archivo.readline())


#vamos a iterar el archivo, cada una de las líneas
#for línea in archivo:
    #print(línea) #iteramos todos los elementos del archivo
#print(archivo.readlines()[12]) #accedemos al archivo en una sola linea

# Anexamos información, copiamos a otro
archivo2 = open('copia.txt', 'a', encoding='utf8')
archivo2.write(archivo.read())
archivo.close() # cerramos el primer archivo
archivo2.close() # ceramos el segundo archivo

print('Se ha terminado el proceso de leer y copiar archivos')