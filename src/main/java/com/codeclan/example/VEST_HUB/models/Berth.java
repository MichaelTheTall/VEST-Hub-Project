package com.codeclan.example.VEST_HUB.models;

import java.util.ArrayList;
import java.util.List;

public class Berth {

    private int number;
    private Ship docked_ship;
    private List<Passenger> berth_passengerList;

    public Berth(int number, Ship docked_ship) {
        this.number = number;
        this.docked_ship = docked_ship;
        this.berth_passengerList = new ArrayList<>();
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public Ship getDocked_ship() {
        return docked_ship;
    }

    public void setDocked_ship(Ship docked_ship) {
        this.docked_ship = docked_ship;
    }

    public List<Passenger> getBerth_passengerList() {
        return berth_passengerList;
    }

    public void setBerth_passengerList(List<Passenger> berth_passengerList) {
        this.berth_passengerList = berth_passengerList;
    }



}
