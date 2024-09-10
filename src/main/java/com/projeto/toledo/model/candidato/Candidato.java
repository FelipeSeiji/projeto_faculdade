package com.projeto.toledo.model.candidato;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "candidato")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Candidato {
    @Id
    @GeneratedValue
    private Integer id;

    private String nome;
    private String idade;
    private String partido;
    private String descricao;
    private String historico;
    private String nivelEscolar;
    private String propostaGoverno;
    private String apoioPolitico;
}
