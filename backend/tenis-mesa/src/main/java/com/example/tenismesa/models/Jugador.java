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
    @Transient
    private Integer ranking;
    @ManyToOne
    @JoinColumn(name="equipo_fk")
    private Equipo equipo;
    public Jugador(){};
    public Jugador(Double altura, String apellidos, LocalDate fecha_nacimiento, String nombre, Integer ranking, Character sexo, Character mano_habil, String nacionalidad, Double peso, Long id){
        this.altura = altura;
        this.apellidos = apellidos;
        this.fecha_nacimiento = fecha_nacimiento;
        this.nombre = nombre;
        this.sexo = sexo;
        this.mano_habil = mano_habil;
        this.nacionalidad = nacionalidad;
        this.peso = peso;
        this.id= id;
        this.ranking= ranking;
    };
}
