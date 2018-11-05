package com.codeclan.example.VEST_HUB.controllers;

import com.codeclan.example.VEST_HUB.repositories.BerthRepository.BerthRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/berths")
public class BerthController {

    @Autowired
    BerthRepository berthRepository;

}
