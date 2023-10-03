package java04;

public class ej01 {
    public static void main(String arg[]) {
        //Escribe un programa que muestre la tirada de tres dados. Se debe mostrar también la suma total
        // (los puntos que suman entre los tres dados)
        int dado1=(int) (Math.random()*6+1);
        int dado2=(int) (Math.random()*6+1);
        int dado3=(int) (Math.random()*6+1);

        System.out.println("Dado 1:"+dado1);
        System.out.println("Dado 2:"+dado2);
        System.out.println("Dado 3:"+dado3);
        System.out.println("Suma total:"+(dado1+dado2+dado3));

    }
}
