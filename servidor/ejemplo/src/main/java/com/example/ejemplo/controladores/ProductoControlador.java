package com.example.ejemplo.controladores;

import com.example.ejemplo.dtos.DtoCreateProducto;
import com.example.ejemplo.entidades.Producto;
import com.example.ejemplo.repositorios.ProductoRepositorio;
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
public class ProductoControlador {
    @Autowired
    ProductoRepositorio repositorio;

    @RequestMapping(path = "/productos/", method = POST)
    public ResponseEntity<Object> create (DtoCreateProducto newProducto)  {
        Producto producto= new Producto(newProducto);
        return new ResponseEntity<>(repositorio.save(producto), HttpStatus.CREATED);
    }
}
