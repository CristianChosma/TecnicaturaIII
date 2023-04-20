package domain;

public class Persona {
    private final int idPersona;
    private static int contadorPersona;
    
    static{ //Bloque de inicialización estático
        System.out.println("Ejecución bloque estático");
        ++Persona.contadorPersona;
    }
    
    { //Bloque de inicialización NO estático o contexto dinámico
        System.out.println("Ejecución del bloque NO estático");
        this.idPersona = Persona.contadorPersona++; //Incrementa el atributo
    }
    
    //Los bloques de inicialización se ejecutan antes del constructor
    
    public Persona(){
        System.out.println("Esta es la ejecución del constructor");
    }
    
   public int getPersona(){
       return this.idPersona;
   }

    @Override
    public String toString() {
        return "Persona{" + "idPersona=" + idPersona + '}';
    }
   
   
}
