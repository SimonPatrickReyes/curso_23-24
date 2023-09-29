import java.util.Scanner;
public class ej12 {
    public static void main(String arg[]) {
        //Escribe un programa que calcule el precio final de un producto según su base imponible (pre-
        //cio antes de impuestos), el tipo de IVA aplicado (general, reducido o superreducido) y el código
        //promocional. Los tipos de IVA general, reducido y superreducido son del 21%, 10% y 4% respec-
        //tivamente. Los códi- gos promocionales pueden ser nopro, mitad, meno5 o 5porc que significan
        //respectivamente que no se aplica promoción, el precio se reduce a la mitad, se descuentan 5 euros
        //o se descuenta el 5%. El ejercicio se da por bueno si se muestran los valores correctos, aunque los
        //números no estén tabulados

        Scanner sc=new Scanner(System.in);

        System.out.println("Introduce la base imponible");
        double base= sc.nextDouble();
        System.out.println("Escriba el tipo de IVA: general, reducido o superreducido");
        String IVA= sc.nextLine();

        System.out.println("Escriba el código promocional: nopro, mitad, meno5 o 5p");
        String cod= sc.nextLine();

        System.out.println("Base imponible:"+base);

        if (IVA == "general"){
            base= base*1.21;
            System.out.println("IVA general 21%:"+base);
        } else if (IVA == "reducido") {
            base= base*1.10;
            System.out.println("IVA reducido 10%:"+base);
        } else {
            base= base*1.04;
            System.out.println("IVA superreducido 4%:"+base);
        }

        if (cod == "nopro"){

            System.out.println("Cód. promo. (sin promoción):"+base);
        } else if (cod == "mitad") {
            base= base/2;
            System.out.println("Cód. promo. (mitad):"+base);
        } else if (cod == "meno5") {
            base= base-5.00;
            System.out.println("Cód. promo. (menos 5 euros):"+base);
        } else if (cod == "5p") {
            base= base*0.95;
            System.out.println("Cód. promo. (5% menos):"+base);
        }

    }
}
