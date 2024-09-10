package com.projeto.toledo.controller;

import org.springframework.stereotype.Service;

import com.projeto.toledo.model.candidato.Candidato;

@Service
public class CandidatoController {
    public Candidato createCandidato(CandidatoController candidatoController){
        //implementar a criacao de um novo candidato
        Candidato candidato = new Candidato();
    
        //setar os dados do candidato
        candidato.setId(null);
        candidato.setNome(null);
        candidato.setPartido(null);
        candidato.setDescricao(null);
        candidato.setHistorico(null);
        candidato.setNivelEscolar(null);
        candidato.setPropostaGoverno(null);
        candidato.setApoioPolitico(null);
        
        //salvar o candidato no banco de dados
        return candidato;
    }
}
