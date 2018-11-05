package com.codeclan.example.VEST_HUB.repositories.DockOfficerRepository;

import com.codeclan.example.VEST_HUB.models.DockOfficer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DockOfficerRepository extends JpaRepository<DockOfficer, Long>, DockOfficerRepositoryCustom {
}
