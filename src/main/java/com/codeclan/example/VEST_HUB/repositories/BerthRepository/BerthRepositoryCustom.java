package com.codeclan.example.VEST_HUB.repositories.BerthRepository;

import com.codeclan.example.VEST_HUB.models.Berth;

import java.util.List;

public interface BerthRepositoryCustom {
    List<Berth> getEmpty();
    List<Berth> getFull();
}
