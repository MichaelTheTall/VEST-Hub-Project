package com.codeclan.example.VEST_HUB.repositories.BerthRepository;

import com.codeclan.example.VEST_HUB.models.Berth;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BerthRepository extends JpaRepository<Berth, Long>, BerthRepositoryCustom {
    List<Berth> getEmpty();
    List<Berth> getFull();
}
