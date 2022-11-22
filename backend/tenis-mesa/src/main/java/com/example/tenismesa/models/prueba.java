package com.example.tenismesa.models;
import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Entity(name="matricula")
@Data
@AllArgsConstructor
public class prueba {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private Double monto;
    private Double nroMaximoCuotas;
    private Double nrocuotasEscogido;
    private LocalDate fecha;

}

