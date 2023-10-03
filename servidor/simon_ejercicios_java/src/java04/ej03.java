package java04;

public class ej03 {
    public static void main(String arg[]) {
        //Igual que el ejercicio anterior pero con la baraja española. Se utilizará la baraja de 40 cartas: 2, 3,
        // 4, 5, 6, 7, sota, caballo, rey y as.
        
        int numero=(int) (Math.random()*10+1);
        int palo=(int) (Math.random()*4+1);

        switch (numero) {
            case 1:
                System.out.print("As de ");
                break;
        
            case 2:
                System.out.print("2 de ");
                break;

            case 3:
                System.out.print("3 de ");
                break;
            
            case 4:
                System.out.print("4 de ");
                break;
                
            case 5:
                System.out.print("5 de ");
                break;
                
            case 6:
                System.out.print("6 de ");
                break;
                
            case 7:
                System.out.print("7 de ");
                break;
                
            case 8:
                System.out.print("Sota de ");
                break;
                
            case 9:
                System.out.print("Caballo de ");
                break;
                
            case 10:
                System.out.print("Rey de ");
                break;

        }

        switch (palo) {
            case 1:
                System.out.print("Bastos");
                break;
        
            case 2:
                System.out.print("Espadas");
                break;

            case 3:
                System.out.print("Oros");
                break;
            
            case 4:
                System.out.print("Copas");
                break;

        }
    }
}