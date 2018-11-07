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

        Passenger p1 = new Passenger("Alyx Vance");
        Passenger p2 = new Passenger("Gordon Freeman");
        Passenger p3 = new Passenger("Cmdr. Shepard");
        Passenger p4 = new Passenger("Liara T'soni");
        Passenger p5 = new Passenger("Urdnot Wrex");
        Passenger p6 = new Passenger("Tali'Zorah vaas Normandi");
        Passenger p7 = new Passenger("Mordin Solus");
        Passenger p8 = new Passenger("Garrus Vakarian");
        Passenger p9 = new Passenger("Niftu Cal");
        Passenger p10 = new Passenger("Aria T'loak");
        Passenger p11 = new Passenger("Doctor Notevil");
        Passenger p12 = new Passenger("Barney Calhoun");

//        p1.setShip(ship1);
//        p2.setShip(ship1);
//        p3.setShip(ship1);
//        p4.setShip(ship1);
//        p5.setShip(ship2);
//        p6.setShip(ship2);
//        p7.setShip(ship2);
//        p8.setShip(ship2);
        p9.setStation(station);
        p10.setStation(station);
        p11.setStation(station);
        p12.setStation(station);

        passengerRepository.save(p1);
        passengerRepository.save(p2);
        passengerRepository.save(p3);
        passengerRepository.save(p4);
        passengerRepository.save(p5);
        passengerRepository.save(p6);
        passengerRepository.save(p7);
        passengerRepository.save(p8);
        passengerRepository.save(p9);
        passengerRepository.save(p10);
        passengerRepository.save(p11);
        passengerRepository.save(p12);

        Ship ship1 = new Ship("UNSC Argonaut", 20, "Ceres", "Mars");
        Ship ship2 = new Ship("HMSS Pigmalion", 40, "Luna", "Pluto");
        Ship ship3 = new Ship("TFSS Segmentus", 10, "Earth", "Saturn");
        ship1.addPass(p1);
        ship1.addPass(p2);
        ship1.addPass(p3);
        ship1.addPass(p4);
        ship2.addPass(p5);
        ship2.addPass(p6);
        ship2.addPass(p7);
        ship2.addPass(p8);
        shipRepository.save(ship1);
        shipRepository.save(ship2);
        shipRepository.save(ship3);

        passengerRepository.save(p1);
        passengerRepository.save(p2);
        passengerRepository.save(p3);
        passengerRepository.save(p4);
        passengerRepository.save(p5);
        passengerRepository.save(p6);
        passengerRepository.save(p7);
        passengerRepository.save(p8);

        DockOfficer d1 = new DockOfficer("DO Hendriksson");
        DockOfficer d2 = new DockOfficer("DO Smith");
        dockOfficerRepository.save(d1);
        dockOfficerRepository.save(d2);


        Berth b1 = new Berth(station);
        Berth b2 = new Berth(station);
        Berth b3 = new Berth(station);
        Berth b4 = new Berth(station);
        Berth b5 = new Berth(station);
        Berth b6 = new Berth(station);
        Berth b7 = new Berth(station);
        Berth b8 = new Berth(station);
        Berth b9 = new Berth(station);
        Berth b10 = new Berth(station);
        Berth b11 = new Berth(station);
        Berth b12 = new Berth(station);
        berthRepository.save(b1);
        berthRepository.save(b2);
        berthRepository.save(b3);
        berthRepository.save(b4);
        berthRepository.save(b5);
        berthRepository.save(b6);
        berthRepository.save(b7);
        berthRepository.save(b8);
        berthRepository.save(b9);
        berthRepository.save(b10);
        berthRepository.save(b11);
        berthRepository.save(b12);
        b1.dock(ship2);
        b2.dock(ship1);

        berthRepository.save(b1);
        berthRepository.save(b2);

        shipRepository.save(ship1);
        shipRepository.save(ship2);


        Inspection in1 = new Inspection(ship1,d1,"20-3-2201");
        Inspection in2 = new Inspection(ship2,d2,"20-3-2201");
        inspectionRepository.save(in1);
        inspectionRepository.save(in2);

        shipRepository.save(ship1);
        shipRepository.save(ship2);



    }

}
