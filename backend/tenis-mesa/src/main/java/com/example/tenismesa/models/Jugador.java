package com.example.tenismesa.models;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;

@Entity(name="jugador")
@Data
@AllArgsConstructor
public class Jugador {
    @Id
    private Long id;
    private String apellidos;
    private LocalDate fecha_nacimiento;
    private Double altura;
    private Double peso;
    private String nacionalidad;
    private Character mano_habil;
    private Character sexo;
    @Transient
    private String nombre;
    @ManyToOne
    @JoinColumn(name="equipo_fk")
    private Equipo equipo;
    public Jugador(){};
}
