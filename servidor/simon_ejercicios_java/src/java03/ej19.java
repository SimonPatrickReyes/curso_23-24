package java03;

import java.util.Scanner;

public class ej19 {
    public static void main(String arg[]) {
    //Realiza un programa que pinte una pirámide por pantalla. La altura se debe pedir por teclado. El
    //carácter con el que se pinta la pirámide también se debe pedir por teclado.

    Scanner sc= new Scanner(System.in);
    System.out.println("¿Cuanto de alto quieres que sea la piramide? (numero de lineas):");
    int altura= sc.nextInt();
    var base=(altura*2)-1;
    
    var espacio= altura-1;
    
    
    System.out.println("Introduce el caracter que constituirá la pirámide");
    var s= sc.next(); 
    
    //inicio piramide base=(altura*2)-2 en huecos;
    for (int i = 1; i <= altura; i++) {
        for (int j = 1; j <= (altura-i); j++) {
           System.out.print(" ");
        }
        for (int j = 1; j <= (2*i-1); j++) {
            System.out.print(s);
        }

        System.out.println();

        
    }
    }

    }


