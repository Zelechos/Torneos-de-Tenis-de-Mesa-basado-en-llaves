package com.example.tenismesa.models;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name="equipo")
@Data
@AllArgsConstructor
public class Equipo {
    @Id
    private Long id;
    private Integer participantes_max;
    private Integer participantes_min;
    public Equipo(){};
}
