package com.codeclan.example.VEST_HUB.repositories.PassengerRepository;

import com.codeclan.example.VEST_HUB.models.Passenger;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PassengerRepository extends JpaRepository<Passenger, Long>, PassengerRepositoryCustom {
}
