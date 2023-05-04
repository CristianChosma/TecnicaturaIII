/*Escribe una función que tome un número como argumento y 
  muestre por consola los números pares desde 0 hasta ese número.
*/
package ScrumMaster;

public class Ejercicio1 {
    public static void numerosPares(int n) {
        for (int i = 0; i <= n; i += 2) { //Recorremos los números de 2 en 2 
            System.out.print(i + " ");   
        }
    }
    public static void main(String[] args) {
        int numero = 18;    // Se le asigan un valor a la variable
        numerosPares(numero);  
    }
}
