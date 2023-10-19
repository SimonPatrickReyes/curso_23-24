package com.example.ejemplo.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
public class DtoCreateProducto{
    private String nombre;
    private Integer precio;
}
