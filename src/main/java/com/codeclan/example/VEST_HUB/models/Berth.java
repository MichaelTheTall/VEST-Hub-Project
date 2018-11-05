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

    public Berth() {
    }

    public Berth(Station station, Long id, Ship docked_ship) {
        this.station = station;
        this.id = id;
        this.docked_ship = docked_ship;
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
}
