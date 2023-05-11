
package test;

import domain.*;
        
public class TestConversionObjetos {
    public static void main(String[] args) {
        Empleado empleado;
        empleado = new Escritor("Juan", 5000, TipoEscritura.CLASICO);
        //System.out.println("empleado = " + empleado);
        //System.out.println(empleado.obtenerDetalles()); //Si queremos acceder al método Escritor
        //empleado.getTipoEscritura();//Esto no se puede hacer
            
        //Downcasting
        //((Escritor)empleado).getTipoEscritura();//Tenemos 2 opcions; esta es una
        //Escritor escritor = (Escritor)empleado; // Esta es la segunda opción
        
        //Upcasting
        //Empleado empleado2 = escritor;
        //System.out.println(empleado2.obtenerDetalles());
    }
}
