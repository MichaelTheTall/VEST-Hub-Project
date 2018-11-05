package com.codeclan.example.VEST_HUB.repositories.ShipRepository;

import com.codeclan.example.VEST_HUB.models.Ship;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShipRepository extends JpaRepository<Ship, Long>, ShipRepositoryCustom {
}
