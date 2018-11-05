package com.codeclan.example.VEST_HUB.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "ships")
public class Ship {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "capacity")
    private int capacity;

    @Column(name = "origin")
    private String origin;

    @Column(name = "destination")
    private String destination;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "ship_id")
    private Station station;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "ship_id")
    private DockOfficer dockOfficer;

    @JsonIgnore
    @OneToMany(mappedBy = "passenger")
    private List<Passenger> passengerList;


    public Ship() {
    }

    public Ship(String name, int capacity, String origin, String destination) {
        this.name = name;
        this.capacity = capacity;
        this.origin = origin;
        this.destination = destination;
        this.passengerList = new ArrayList<>();
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public List<Passenger> getPassengerList() {
        return passengerList;
    }

    public void setPassengerList(List<Passenger> passengerList) {
        this.passengerList = passengerList;
    }

    public Station getStation() {
        return station;
    }

    public void setStation(Station station) {
        this.station = station;
    }

    public DockOfficer getDockOfficer() {
        return dockOfficer;
    }

    public void setDockOfficer(DockOfficer dockOfficer) {
        this.dockOfficer = dockOfficer;
    }
}
