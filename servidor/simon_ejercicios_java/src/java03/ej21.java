package java03;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ej21 {
    public static void main(String arg[]) {
    /* Realiza un programa que vaya pidiendo números hasta que se introduzca un numero negativo y
    nos diga cuantos números se han introducido, la media de los impares y el mayor de los pares. El
    número negativo sólo se utiliza para indicar el final de la introducción de datos pero no se incluye
    en el cómputo */  
    Scanner sc=new Scanner (System.in);
    ArrayList<Integer> numberList = new ArrayList<>();
    System.out.println("Añade un número");
    int num= sc.nextInt();
    do{
        numberList.add(num);
        System.out.println("Añada otro número");
        num= sc.nextInt();
    }
         while (num>0);
    if (num<0) {
        System.out.println(numberList);
    }

    }

   
}
