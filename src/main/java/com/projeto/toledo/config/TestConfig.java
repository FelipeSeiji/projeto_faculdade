package com.projeto.toledo.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.validation.annotation.Validated;

import com.projeto.toledo.model.candidato.Candidato;
import com.projeto.toledo.model.candidato.Candidato.createCandidato;
import com.projeto.toledo.repository.CandidatoRepository;

@Configuration
public class TestConfig implements CommandLineRunner{
    @Autowired
    private CandidatoRepository candidatoRepository;

    @Override
    @Validated(createCandidato.class)
    public void run(String... args) throws Exception {
        Candidato c1 = new Candidato(null, "Felipe", 
        19, "null", 
        "null", "null", "null", 
        "null", "null");
        candidatoRepository.save(c1);
    }
}
