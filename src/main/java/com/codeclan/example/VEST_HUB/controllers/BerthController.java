package com.codeclan.example.VEST_HUB.controllers;

import com.codeclan.example.VEST_HUB.models.Berth;
import com.codeclan.example.VEST_HUB.models.Ship;
import com.codeclan.example.VEST_HUB.repositories.BerthRepository.BerthRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/berths")
public class BerthController {

    @Autowired
    BerthRepository berthRepository;

    @GetMapping(value = "/empty")
    public List<Berth> getEmpty() {
        return berthRepository.getEmpty();
    }

    @GetMapping(value = "/full")
    public List<Berth> getFull() {
        return berthRepository.getFull();
    }

}
