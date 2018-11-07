package com.codeclan.example.VEST_HUB.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.web.bind.annotation.GetMapping;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table(name = "berths")
public class Berth {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "ship_id")
    private Ship docked_ship;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "station_id", nullable = false)
    private Station station;

    @Column(name = "shipName")
    private String shipName;

    public Berth() {
    }

    public Berth(Station station) {
        this.station = station;
        this.docked_ship = null;
    }

    public Ship getDocked_ship() {
        return docked_ship;
    }

    public void setDocked_ship(Ship docked_ship) {
        this.docked_ship = docked_ship;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Station getStation() {
        return station;
    }

    public void setStation(Station station) {
        this.station = station;
    }

    public void dock(Ship ship){
        setDocked_ship(ship);
        setShipName(ship.getName());
        ship.setStation(this.station);
        ship.setBerth(this.id);
        ship.setInspected(false);
    }

    public String launch(){
        String name = docked_ship.getName();
        if (docked_ship.isInspected()) {
            this.shipName = null;
            this.docked_ship.setBerth(null);
            this.docked_ship = null;
            return name + " launched!";
        } else {
            return name + " cannot launch without an inspection!";
        }
    }

    public String getShipName() {
        return shipName;
    }

    public void setShipName(String shipName) {
        this.shipName = shipName;
    }
}
