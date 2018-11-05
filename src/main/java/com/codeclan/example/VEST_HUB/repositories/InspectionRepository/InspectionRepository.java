package com.codeclan.example.VEST_HUB.repositories.InspectionRepository;

import com.codeclan.example.VEST_HUB.models.Inspection;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InspectionRepository extends JpaRepository<Inspection, Long>, InspectionRepositoryCustom {
}
