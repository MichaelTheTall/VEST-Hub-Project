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
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "capacity")
    private int capacity;

    @Column(name = "origin")
    private String origin;

    @Column(name = "destination")
    private String destination;

    @Column(name = "berth")
    private Long berth;

    @Column(name = "inspected")
    private boolean inspected;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "station_id")
    private Station station;

    @JsonIgnore
    @OneToMany(mappedBy = "ship")
    private List<Inspection> inspectionList;

    @JsonIgnore
    @OneToMany(mappedBy = "ship")
    private List<Passenger> passengerList;

    public Ship() {
    }

    public Ship(String name, int capacity, String origin, String destination) {
        this.name = name;
        this.capacity = capacity;
        this.origin = origin;
        this.destination = destination;
        this.station = null;
        this.berth = null;
        this.inspected = false;
        this.passengerList = new ArrayList<>();
        this.inspectionList = new ArrayList<>();
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

    public List<Inspection> getInspectionList() {
        return inspectionList;
    }

    public void setInspectionList(List<Inspection> inspectionList) {
        this.inspectionList = inspectionList;
    }

    public Long getBerth() {
        return berth;
    }

    public void setBerth(Long berth) {
        this.berth = berth;
    }

    public void setInspected(boolean b) {
        this.inspected = b;
    }

    public boolean isInspected() {
        return inspected;
    }

    public void addPass(Passenger passenger){
        passengerList.add(passenger);
        passenger.setShip(this);
        passenger.setShipName(this.name);
        passenger.setStation(null);
    }

    public void removePass(Passenger passenger){
        passengerList.remove(passenger);
        passenger.setShip(null);
        passenger.setShipName(null);
        passenger.setStation(this.station);
    }

}
