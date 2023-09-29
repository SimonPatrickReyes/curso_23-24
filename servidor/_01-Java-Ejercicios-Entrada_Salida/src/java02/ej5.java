package java02;
import java.util.Scanner;


public class ej5 {
    public static void main(String arg[]) {
    //Realiza un programa que resuelva una ecuación de primer grado (del tipo ax + b = 0)
        Scanner sc=new Scanner(System.in);
        System.out.println("ax + b = 0");
        System.out.println("Introduce un valor para a");
        var a= sc.nextInt();
        System.out.println("Introduce un valor para b");
        var b= sc.nextInt();
        System.out.println("x = " + (-b/a));
    }
}
