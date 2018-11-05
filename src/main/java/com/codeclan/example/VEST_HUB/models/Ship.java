package com.codeclan.example.VEST_HUB.models;

import java.util.ArrayList;
import java.util.List;

public class Ship {

    private int id;
    private String name;
    private int capacity;
    private String origin;
    private String destination;
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



}
