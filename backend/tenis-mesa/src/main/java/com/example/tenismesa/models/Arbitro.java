package com.example.tenismesa.models;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity(name="arbitro")
@Data
@AllArgsConstructor
public class Arbitro {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String nombre;
    private String apellido;
    private LocalDate fecha_nacimiento;
    private Integer experiencia_anos;
    private String email;
    private Integer telefono;

    public Arbitro() {

    }
}
