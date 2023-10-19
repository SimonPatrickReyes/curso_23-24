package com.example.ejemplo.repositorios;

import com.example.ejemplo.entidades.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepositorio extends JpaRepository<Cliente, Long> {
}
