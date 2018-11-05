package com.codeclan.example.VEST_HUB.controllers;

import com.codeclan.example.VEST_HUB.repositories.StationRepository.StationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/stations")
public class StationController {

    @Autowired
    StationRepository stationRepository;

}
