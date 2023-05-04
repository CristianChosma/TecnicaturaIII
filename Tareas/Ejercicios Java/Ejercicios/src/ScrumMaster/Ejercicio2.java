/*
 Escribe una función que tome dos números como argumentos y 
 devuelva el resultado multiplicados entre si.
 */
package ScrumMaster;

public class Ejercicio2 {
    public static int multiplicar(int a, int b) {
        return a * b;   //Multiplica los argumentos a y b
    }
    public static void main(String[] args) {
        int numA = 5;   //variable 1
        int numB = 7;   //variable 2    
        int resultado = multiplicar(numA, numB); //variable 3
        System.out.println("El resultado de la multiplicación es: " + resultado); // Imprime resultado
    }
}
