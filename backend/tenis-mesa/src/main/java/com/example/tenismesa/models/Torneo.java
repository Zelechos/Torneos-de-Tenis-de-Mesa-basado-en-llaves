package com.example.tenismesa.models;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;


@Entity(name="torneo")
@Data
@AllArgsConstructor
public class Torneo {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private LocalDate fecha_final;
    private LocalDate fecha_inicio;
    private String descripcion;
    private String sede;

    private String lugar;
    private Double costo;
    @ManyToOne
    @JoinColumn(name="categoria_id")
    private Categoria categoria;
    public Torneo(){};
}
