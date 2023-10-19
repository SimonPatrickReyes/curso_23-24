package com.example.ejemplo.servicios;

import com.example.ejemplo.dtos.DtoCliente;
import com.example.ejemplo.dtos.DtoCreateCliente;
import com.example.ejemplo.entidades.Cliente;
import com.example.ejemplo.entidades.Producto;
import com.example.ejemplo.repositorios.ClienteRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClienteServicio {
    @Autowired
    ClienteRepositorio repositorio;
    public DtoCliente create(DtoCreateCliente newCliente){
        Cliente cliente= new Cliente(newCliente);
        repositorio.save(cliente);
        DtoCliente dtoFinal = new DtoCliente(cliente);
        return dtoFinal;
    }
}
