package java04;


public class ej05 {
    public static void main(String arg[]) {
        //Muestra 50 números enteros aleatorios entre 100 y 199 (ambos incluidos) separados por espacios.
        //Muestra también el máximo, el mínimo y la media de esos números.
        int suma=0;
        int n;
        int minimo=199;
        int maximo=100;

        

        for (int i = 0; i < 50; i++) {
            n= (int) (Math.random()*100)+100;
            System.out.print(n+" ");
            suma +=n;

            if (n<minimo) {
                minimo=n;
            }

            if (n>maximo) {
                maximo=n;
            }

        }

        System.out.println("\nMaximo: " + maximo + "\nMinimo: "+ minimo+"\nSuma total: "+suma+"\nMedia: "+suma/50);
    }
}