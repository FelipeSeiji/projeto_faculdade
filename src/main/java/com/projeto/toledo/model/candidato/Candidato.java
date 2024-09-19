package com.projeto.toledo.model.candidato;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "candidato")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Candidato {
    public interface createCandidato{
    }
    public interface updateCandidato{
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(unique = true, nullable = false)
    private Integer id;

    @Column(length = 50, nullable = false)
    @NotEmpty(groups = createCandidato.class)
    @NotNull(groups = createCandidato.class)
    @Size(groups = createCandidato.class, min = 1, max = 50)
    private String nome;

    @Column(length = 3, nullable = false)
    @NotNull(groups = {createCandidato.class, updateCandidato.class})
    @Min(value = 18)
    @Max(value = 100)
    private int idade;

    @Column(length = 20, nullable = false)
    @NotEmpty(groups = {createCandidato.class, updateCandidato.class})
    @NotNull(groups = {createCandidato.class, updateCandidato.class})
    @Size(groups = { createCandidato.class, updateCandidato.class }, min = 2, max = 20)
    private String partido;

    @Column(length = 255, nullable = false)
    @NotEmpty(groups = {createCandidato.class, updateCandidato.class})
    @NotNull(groups = {createCandidato.class, updateCandidato.class})
    @Size(groups = { createCandidato.class, updateCandidato.class }, min = 1, max = 255)
    private String descricao;

    @Column(length = 255, nullable = false)
    @NotEmpty(groups = {createCandidato.class, updateCandidato.class})
    @NotNull(groups = {createCandidato.class, updateCandidato.class})
    @Size(groups = { createCandidato.class, updateCandidato.class }, min = 1, max = 255)
    private String historico;

    @Column(length = 20, nullable = false)
    @NotEmpty(groups = {createCandidato.class, updateCandidato.class})
    @NotNull(groups = {createCandidato.class, updateCandidato.class})
    @Size(groups = { createCandidato.class, updateCandidato.class }, min = 1, max = 20)
    private String escolaridade;

    @Column(length = 255, nullable = false)
    @NotEmpty(groups = {createCandidato.class, updateCandidato.class})
    @NotNull(groups = {createCandidato.class, updateCandidato.class})
    @Size(groups = {createCandidato.class, updateCandidato.class}, min = 1, max = 255)
    private String propostaGoverno;

    @Column(length = 255, nullable = false)
    @NotEmpty(groups = {createCandidato.class, updateCandidato.class})
    @NotNull(groups = {createCandidato.class, updateCandidato.class})
    @Size(groups = {createCandidato.class, updateCandidato.class}, min = 1, max = 255)
    private String apoioPolitico;
}
