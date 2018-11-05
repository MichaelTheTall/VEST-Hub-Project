package com.codeclan.example.VEST_HUB.repositories.StationRepository;

import com.codeclan.example.VEST_HUB.models.Station;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StationRepository extends JpaRepository<Station, Long>, StationRepositoryCustom {
}
