package com.codeclan.example.VEST_HUB.controllers;


import com.codeclan.example.VEST_HUB.models.Ship;
import com.codeclan.example.VEST_HUB.repositories.ShipRepository.ShipRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/ships")
public class ShipController {

    @Autowired
    ShipRepository shipRepository;

    @GetMapping(value = "/arrivals")
    public List<Ship> getArrivals() {
        return shipRepository.getArrivals();
    }

    @GetMapping(value = "/departures")
    public List<Ship> getDepartures() {
        return shipRepository.getDepartures();
    }

}
