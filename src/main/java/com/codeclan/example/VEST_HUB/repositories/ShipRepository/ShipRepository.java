package com.codeclan.example.VEST_HUB.repositories.ShipRepository;

import com.codeclan.example.VEST_HUB.models.Ship;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

public interface ShipRepository extends JpaRepository<Ship, Long>, ShipRepositoryCustom {
    List<Ship> getArrivals();
    List<Ship> getDepartures();
}
