package com.example.ejemplo.entidades;

import com.example.ejemplo.dtos.DtoCreateCliente;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//Entity y Data obligatorio para todas las entidades, data te proporciona los setters y getters
@Entity @Data @NoArgsConstructor @AllArgsConstructor @Table(name = "clientes")
public class Cliente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private Integer edad;

    //Ejemplo de constructor
    public Cliente(DtoCreateCliente newCliente) {
        this.nombre = newCliente.getNombre();
        this.edad = newCliente.getEdad();
    }
}
