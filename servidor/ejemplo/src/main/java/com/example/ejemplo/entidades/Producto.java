package com.example.ejemplo.entidades;

import com.example.ejemplo.dtos.DtoCreateProducto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//Entity y Data obligatorio para todas las entidades, data te proporciona los setters y getters
@Entity @Data @NoArgsConstructor @AllArgsConstructor @Table(name = "productos")
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private Integer precio;

    //Ejemplo de constructor
    public Producto(DtoCreateProducto newProducto) {
        this.nombre = newProducto.getNombre();
        this.precio = newProducto.getPrecio();
    }
}

