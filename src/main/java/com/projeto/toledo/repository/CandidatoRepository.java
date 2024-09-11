package com.projeto.toledo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projeto.toledo.model.candidato.Candidato;

@Repository
public interface CandidatoRepository extends JpaRepository<Candidato, Integer>{
    
}
