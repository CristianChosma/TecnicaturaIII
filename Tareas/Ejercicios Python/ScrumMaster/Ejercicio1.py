# Escribe una función que tome un número como argumento y
# muestre por consola los números pares desde 0 hasta ese número.

def numPares(n):
    for i in range(0, n+1, 2):
        print(i, end= ' ')

numero = 18   # Se le asigan un valor a la variable
numPares(numero)