package com.devsuperior.dsmovies.repositories;

import com.devsuperior.dsmovies.entities.Score;
import com.devsuperior.dsmovies.entities.ScorePK;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}
