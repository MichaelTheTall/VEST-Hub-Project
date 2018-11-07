package com.codeclan.example.VEST_HUB.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "station")
public class Station {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @JsonIgnore
    @OneToMany(mappedBy = "station")
    private List<Berth> berthList;

    @JsonIgnore
    @OneToMany(mappedBy = "station")
    private List<Passenger> station_passengers;

    @JsonIgnore
    @OneToMany(mappedBy = "station")
    private List<Ship> previous_ships;

    public Station() {
    }

    public Station(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Ship> getPrevious_ships() {
        return previous_ships;
    }

    public void setPrevious_ships(List<Ship> previous_ships) {
        this.previous_ships = previous_ships;
    }

    public List<Berth> getBerthList() {
        return berthList;
    }

    public void setBerthList(List<Berth> berthList) {
        this.berthList = berthList;
    }

    public List<Passenger> getStation_passengers() {
        return station_passengers;
    }

    public void setStation_passengers(List<Passenger> station_passengers) {
        this.station_passengers = station_passengers;
    }

}
