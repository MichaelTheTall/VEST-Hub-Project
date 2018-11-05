package com.codeclan.example.VEST_HUB.components;

import com.codeclan.example.VEST_HUB.models.*;
import com.codeclan.example.VEST_HUB.repositories.BerthRepository.BerthRepository;
import com.codeclan.example.VEST_HUB.repositories.DockOfficerRepository.DockOfficerRepository;
import com.codeclan.example.VEST_HUB.repositories.InspectionRepository.InspectionRepository;
import com.codeclan.example.VEST_HUB.repositories.PassengerRepository.PassengerRepository;
import com.codeclan.example.VEST_HUB.repositories.ShipRepository.ShipRepository;
import com.codeclan.example.VEST_HUB.repositories.StationRepository.StationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    BerthRepository berthRepository;

    @Autowired
    DockOfficerRepository dockOfficerRepository;

    @Autowired
    InspectionRepository inspectionRepository;

    @Autowired
    PassengerRepository passengerRepository;

    @Autowired
    ShipRepository shipRepository;

    @Autowired
    StationRepository stationRepository;

    public DataLoader() {
    }

    @Override
    public void run(ApplicationArguments args) throws Exception{
        Station station = new Station("VEST");
        stationRepository.save(station);

        Passenger p1 = new Passenger("Bob");
        Passenger p2 = new Passenger("Alice");
        Passenger p3 = new Passenger("Joe");
        Passenger p4 = new Passenger("Denise");
        passengerRepository.save(p1);
        passengerRepository.save(p2);
        passengerRepository.save(p3);
        passengerRepository.save(p4);

        DockOfficer d1 = new DockOfficer("DO Hendriksson", station);
        DockOfficer d2 = new DockOfficer("DO Smith", station);
        dockOfficerRepository.save(d1);
        dockOfficerRepository.save(d2);

        Ship ship1 = new Ship("SS Argo", 20, "Ceres", "Mars");
        Ship ship2 = new Ship("SS Pigmalion", 40, "Luna", "Pluto");
        shipRepository.save(ship1);
        shipRepository.save(ship2);

        Berth b1 = new Berth(station, null);
        Berth b2 = new Berth(station, ship1);
        Berth b3 = new Berth(station, ship2);
        berthRepository.save(b1);
        berthRepository.save(b2);
        berthRepository.save(b3);

        Inspection in1 = new Inspection(ship1,d1,"20-3-2201");
        Inspection in2 = new Inspection(ship2,d2,"20-3-2201");
        inspectionRepository.save(in1);
        inspectionRepository.save(in2);
    }

}
