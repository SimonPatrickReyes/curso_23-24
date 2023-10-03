package java03;

import java.util.Scanner;

public class ej17 {
    public static void main(String arg[]) {
    //Realiza un programa que sume los 100 números siguientes a un número entero y positivo introducido por teclado. 
    //Se debe comprobar que el dato introducido es correcto (que es un númeropositivo).
    
    Scanner sc= new Scanner(System.in);
    System.out.println("Introduce un número entero y positivo");
    int num= sc.nextInt();
    int resultado=0;

    if (num>0) {
        for (int i = 0; i < 100; i++) {
            resultado=resultado+num;
            num++;
            System.out.println(resultado);
        }


    }else{
        System.out.println("Número no positivo");
    }

    }
}
