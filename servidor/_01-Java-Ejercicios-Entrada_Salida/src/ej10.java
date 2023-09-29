import java.util.Scanner;
public class ej10 {
    public static void main(String arg[]) {
    //Realiza un conversor de Mb a Kb.
        Scanner sc=new Scanner(System.in);
        System.out.println("Introduce una cantidad de Mb:");
        int mb= sc.nextInt();
        System.out.println(mb+" megabytes son "+(mb*1000)+" kylobytes");

    }
}
