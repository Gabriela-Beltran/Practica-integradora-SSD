package com.integrador.DSS.Models;
import com.google.gson.Gson;

public class Simplex {

    public static double[][] Matrix;

    public Simplex(String ruta){
        Matrix = new double[5][8];
            int fila = 1;
            String[] sig = ruta.split("\n");
        for(int i = 0; i < sig.length; i++){
                System.out.println(sig[i]);
                String[] elementos = sig[i].split(",");
                for(int j = 1; j <= elementos.length; j++){
                    Matrix[fila][j!=4?j:j+3] = Integer.parseInt(elementos[j-1]);
                }
                fila++;
            }

        Matrix[1][4] = 1;
        Matrix[1][5] = 0;
        Matrix[1][6] = 0;


        Matrix[2][4] = 0;
        Matrix[2][5] = 1;
        Matrix[2][6] = 0;


        Matrix[3][4] = 0;
        Matrix[3][5] = 0;
        Matrix[3][6] = 1;

        Matrix[4][1] *= -1;
        Matrix[4][2] *= -1;
        Matrix[4][3] *= -1;

        Matrix[4][4] = 0;
        Matrix[4][5] = 0;
        Matrix[4][6] = 0;
        Matrix[4][7] = 0;
    }

    public static void solucion() {
        int columna = 1;
        int fila = 1;


        for (int it = 1; it <= 7; it++) {

            if (Matrix[4][it] < Matrix[4][columna]) {
                columna = it;
            }
        }

        //Si se encontraron negativos, no se llego a la solucion óptima
        if (Matrix[4][columna] < 0) {
            // Definimos la Fila pivote
            for (int it = 1; it <= 3; it++) {
                if (Matrix[it][columna] > 0
                        && (Matrix[it][7] / Matrix[it][columna])
                        < (Matrix[fila][7] / Matrix[fila][columna])) {
                    fila = it;
                }
            }
            double elemento = Matrix[fila][columna];
            for (int it = 1; it <= 7; it++) {
                Matrix[fila][it] = Matrix[fila][it] * (1.0 / elemento);
            }

            for (int itFila = 1; itFila <= 4; itFila++) {
                if (itFila != fila) {
                    double aux = Matrix[itFila][columna] * (-1);
                    for (int itCol = 1; itCol <= 7; itCol++) {
                        Matrix[itFila][itCol] += aux * Matrix[fila][itCol];
                    }
                }
            }

            System.out.println("Z = " + Matrix[4][7]);
            System.out.println("X1 = " + Matrix[4][1]);
            System.out.println("X2 = " + Matrix[4][2]);
            System.out.println("X3 = " + Matrix[4][3]);

            solucion();
        }
    }

    public static String imprimirsolucion(){
        double [] arr = new double[4];
        arr[0] = Matrix[4][7];
        arr[1] = Matrix[4][1];
        arr[2] = Matrix[4][2];
        arr[3] = Matrix[4][3];
        Gson gson = new Gson();
        return gson.toJson(arr);
    }

}