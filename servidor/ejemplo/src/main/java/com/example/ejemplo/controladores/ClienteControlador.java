package com.example.ejemplo.controladores;

import com.example.ejemplo.dtos.DtoCreateCliente;
import com.example.ejemplo.entidades.Cliente;
import com.example.ejemplo.repositorios.ClienteRepositorio;
import com.example.ejemplo.servicios.ClienteServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

import static org.springframework.web.bind.annotation.RequestMethod.POST;

@RestController
public class ClienteControlador {
    @Autowired
    ClienteServicio servicio;

    // POST AN ILLUSTRATION
    @RequestMapping(path = "/Clientes/", method = POST)
    public ResponseEntity<Object> create (DtoCreateCliente newCliente)  {

        return new ResponseEntity<>(servicio.create(newCliente) ,HttpStatus.CREATED);
    }
}
