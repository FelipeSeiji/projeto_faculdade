package com.projeto.toledo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projeto.toledo.model.candidato.Candidato;

public interface CandidatoRepository extends JpaRepository<Candidato, Integer>{
    
}
