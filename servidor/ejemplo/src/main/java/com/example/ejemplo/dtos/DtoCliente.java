package com.example.ejemplo.dtos;

import com.example.ejemplo.entidades.Cliente;

public class DtoCliente {
    private String nombre;

    public DtoCliente(Cliente cliente) {
        this.nombre = cliente.getNombre();
    }
}
