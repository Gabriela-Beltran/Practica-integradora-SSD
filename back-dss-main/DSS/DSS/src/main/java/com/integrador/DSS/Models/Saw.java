package com.integrador.DSS.Models;
import com.google.gson.Gson;

public class Saw {

    public static double[][] TablaSaw, TablaPuestos;
    public static int nalternativas, ncriterios;

    public Saw(String ruta){

        String[] salto = ruta.split("\n");

        String linea;
        linea = salto[0];
        System.out.println(linea);
        String[] elementos = linea.split(",");
        nalternativas = Integer.parseInt(elementos[0]);
        ncriterios = Integer.parseInt(elementos[1]);

        TablaSaw = new double[nalternativas+2][ncriterios];
        TablaPuestos = new double[nalternativas][2];
        int cc2 = 0;
        System.out.println("Hola");
        for(int i = 1; i < salto.length; i++){
            System.out.println(salto[i]);
            elementos = salto[i].split(",");
            int cc = 0;
            for (int j = 0; j < ncriterios; j++){
                System.out.println(elementos[cc]);

                TablaSaw[i-1][j] = Double.parseDouble(elementos[cc]);
                cc++;
            }
        }
    }

    public static void solucion() {
        double [] Preferentes = new double[ncriterios];
        double [][] TablaNormalizada = new double[nalternativas][ncriterios];

        for (int i = 0; i < ncriterios; i++){
            Preferentes[i] = TablaSaw[0][i];
        }
        for (int i = 0; i < nalternativas; i++){
            for (int j = 0; j < ncriterios; j++){
                if (TablaSaw[nalternativas][i] == 1 && TablaSaw[j][i] > Preferentes[i]){
                    Preferentes[i] = TablaSaw[j][i];
                }
                if (TablaSaw[nalternativas][i] == 2 && TablaSaw[j][i] < Preferentes[i]){
                    Preferentes[i] = TablaSaw[j][i];
                }
            }

        }
        for (int i = 0; i < nalternativas; i++){
            for (int j = 0; j < ncriterios; j++){
                if (TablaSaw[nalternativas][i] == 1){
                    TablaNormalizada[j][i] = TablaSaw[j][i] / Preferentes[i];
                }
                if (TablaSaw[nalternativas][i] == 2){
                    TablaNormalizada[j][i] = Preferentes[i] / TablaSaw[j][i];
                }
            }
        }
        for (int i = 0; i < nalternativas; i++){
            Preferentes[i] = 0;
            for (int j = 0; j < ncriterios; j++){
                Preferentes[i] = Preferentes[i] + (TablaNormalizada[i][j] * TablaSaw[nalternativas+1][j]);
            }
        }
        for (int i = 0; i < nalternativas; i++){
            double Auxiliar = 0;
            for (int j = 0; j < ncriterios; j++){
                if (Preferentes[j] > Auxiliar){
                    Auxiliar = Preferentes[j];
                    TablaPuestos[i][0] = j;
                    TablaPuestos[i][1] = Preferentes[j];
                }
            }
            Preferentes[(int)TablaPuestos[i][0]] = 0;
        }
    }

    public static String imprimirsolucion(){
        System.out.println("La Clasificacion de las Alternativas es la siguiente:");
        Gson gson = new Gson();
        return gson.toJson(TablaPuestos);
    }
}