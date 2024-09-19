package com.projeto.toledo.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.projeto.toledo.model.candidato.Candidato;
import com.projeto.toledo.model.candidato.Candidato.createCandidato;
import com.projeto.toledo.service.CandidatoService;

import jakarta.validation.Valid;

@RestController
@RequestMapping(value = "/candidato")
@Validated
public class CandidatoController {

    @Autowired
    private CandidatoService candidatoService;

    @GetMapping
    @Validated(createCandidato.class)
    public ResponseEntity<List<Candidato>> findAll(){
        List<Candidato> list = candidatoService.findAll();
        return ResponseEntity.ok().body(list); 
    }

    @GetMapping("/{id}")
    @Validated(createCandidato.class)
    public ResponseEntity<Candidato> findById(@PathVariable Integer id){
        Candidato candidato = this.candidatoService.findById(id);
        return ResponseEntity.ok().body(candidato);
    }

    @PostMapping
    @Validated(createCandidato.class)
    public ResponseEntity<Void> create(@Valid @RequestBody Candidato candidato){
        this.candidatoService.create(candidato);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(candidato.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }

    @PutMapping("/{id}")
    @Validated
    public ResponseEntity<Void> update(@Valid @RequestBody Candidato candidato, @PathVariable Integer id){
        candidato.setId(id);
        this.candidatoService.update(candidato);
        return ResponseEntity.noContent().build();
    }
    @DeleteMapping("/{id}")
    @Validated(createCandidato.class)
    public ResponseEntity<Void> delete(@PathVariable Integer id){
        this.candidatoService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
