package com.codeclan.example.VEST_HUB.repositories.ShipRepository;

import com.codeclan.example.VEST_HUB.models.Ship;

import java.util.List;

public interface ShipRepositoryCustom {
    List<Ship> getArrivals();
    List<Ship> getDepartures();
}
