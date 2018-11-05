package com.codeclan.example.VEST_HUB.controllers;

import com.codeclan.example.VEST_HUB.repositories.InspectionRepository.InspectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/inspections")
public class InspectionController {

    @Autowired
    InspectionRepository inspectionRepository;

}
