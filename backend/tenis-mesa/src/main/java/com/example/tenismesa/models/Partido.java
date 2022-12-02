package com.example.tenismesa.models;
import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;

@Entity(name="partido")
@Data
@AllArgsConstructor
public class Partido {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String nombre;
    private String lugar;
    private LocalDate fecha;
    public Partido(){};
}

