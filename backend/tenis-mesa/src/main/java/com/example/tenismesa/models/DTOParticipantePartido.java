package com.example.tenismesa.models;


import com.fasterxml.jackson.annotation.JsonAutoDetect;

import java.io.Serializable;
@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)

public class DTOParticipantePartido implements Serializable {
    private Participante p1;
    private Participante p2;
    public DTOParticipantePartido(Participante p1, Participante p2){
        this.p1 = p1;
        this.p2=p2;
    }
}
