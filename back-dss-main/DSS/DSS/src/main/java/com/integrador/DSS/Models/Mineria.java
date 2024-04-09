package com.integrador.DSS.Models;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.*;
import java.io.IOException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.net.URI;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.http.HttpClient;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

public class Mineria {
    public Mineria(String nombreBebida) {
    }

    public static void main(String[] args) throws IOException, InterruptedException {
        // Obtén el nombre de la bebida desde los argumentos de línea de comandos
        String nombreBebida = args.length > 0 ? args[0] : "";
        // Verifica si se proporcionó un nombre de bebida
        if (nombreBebida.isEmpty()) {
            System.out.println("Por favor, ingrese el nombre de la bebida como argumento.");
        } else {
            // Llama a la función analizarPopularidad y muestra los resultados
            List<String> resultados = analizarPopularidad(nombreBebida);
            for (String resultado : resultados) {
                System.out.println(resultado);
            }
        }
    }


    public static List<String> analizarPopularidad(String nombre) throws IOException, InterruptedException {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + nombre))
                .build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        List<String> resultados = new ArrayList<>();
        resultados.add(response.body());
        return resultados;
    }
}