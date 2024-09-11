package com.projeto.toledo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projeto.toledo.model.candidato.Candidato;
import com.projeto.toledo.repository.CandidatoRepository;

import jakarta.transaction.Transactional;

@Service
public class CandidatoService {
    @Autowired
    private CandidatoRepository candidatoRepository;

    //Crud do Candidato

    public Candidato findById(Integer Id){
        Optional<Candidato> candidato = this.candidatoRepository.findById(Id);
        return candidato.orElseThrow(() -> new RuntimeException(
            "Usuario não encontrado"
        ));
    }

    @Transactional
    public Candidato create(Candidato candidato){
        candidato.setId(null);
        candidato = this.candidatoRepository.save(candidato);
        return candidato;
    }

    @Transactional
    public Candidato update(Candidato candidato){
        Candidato candidatoUpdate = findById(candidato.getId());
        candidatoUpdate.setIdade(candidato.getIdade());
        candidatoUpdate.setPartido(candidato.getPartido());
        candidatoUpdate.setDescricao(candidato.getDescricao());
        candidatoUpdate.setHistorico(candidato.getHistorico());
        candidatoUpdate.setEscolaridade(candidato.getEscolaridade());
        candidato.setPropostaGoverno(candidato.getPropostaGoverno());
        candidatoUpdate.setApoioPolitico(candidato.getApoioPolitico());
        return this.candidatoRepository.save(candidatoUpdate);
    }

    public void delete(Integer id) {
        findById(id);
        try {
            this.candidatoRepository.deleteById(id);
        } catch (Exception e) {
            throw new RuntimeException("Não é possivel excluir");
        }
    }

    public List<Candidato> findAll(){
        return this.candidatoRepository.findAll();
    }
}
