package com.example.ejemplo.repositorios;

import com.example.ejemplo.entidades.Producto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductoRepositorio extends JpaRepository<Producto, Long> {
}

