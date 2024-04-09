package com.integrador.DSS.Controllers;
import com.integrador.DSS.Models.Mineria;
import com.integrador.DSS.Models.Saw;
import com.integrador.DSS.Models.Simplex;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import java.io.IOException;
import java.util.List;
import java.util.Map;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")


public class mainController {

    @PostMapping("/simplex")
    public ResponseEntity<String> SMPLX(@RequestBody Map<String, Object> requestBody) {
        String datos = (String) requestBody.get("datos");

        Simplex simplex;
        simplex = new Simplex(datos);
        simplex.solucion();

        return ResponseEntity.ok(simplex.imprimirsolucion());


    }

    @PostMapping("/saw")
    public ResponseEntity<String> metSaw(@RequestBody Map<String, Object> requestBody) {
        String datos = (String) requestBody.get("datos");

        Saw saw;
        saw = new Saw(datos);
        saw.solucion();
        return ResponseEntity.ok(saw.imprimirsolucion());


    }

    @PostMapping("/mineria")
    public ResponseEntity<List<String>> mineria(@RequestBody Map<String, Object> requestBody) {
        String nombreBebida =(String)requestBody.get("nombreBebida");
        try {
            List<String> resultados = Mineria.analizarPopularidad(nombreBebida);
            return ResponseEntity.ok(resultados);
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
            return ResponseEntity.internalServerError().build();
        }
    }

    private static final String BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=";

    @PostMapping("/categorias")
    public ResponseEntity<String> obtenerCategorias(@RequestBody Map<String, String> requestBody) {
        String categoria = requestBody.get("categoria");
        if (categoria == null || categoria.isEmpty()) {
            return ResponseEntity.badRequest().body("El parámetro 'categoria' es obligatorio.");
        }


        String url = BASE_URL + categoria;
        RestTemplate restTemplate = new RestTemplate();
        String resultado = restTemplate.getForObject(url, String.class);

        return ResponseEntity.ok(resultado);
    }


}