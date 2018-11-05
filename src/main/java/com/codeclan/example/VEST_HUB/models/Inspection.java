package com.codeclan.example.VEST_HUB.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "inspections")
public class Inspection {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @JsonIgnore
    @OneToMany(mappedBy = "ship")
    private Ship ship;

    @JsonIgnore
    @OneToMany(mappedBy = "dock_officer")
    private DockOfficer dockOfficer;

    @Column(name = "date")
    private String date;

    public Inspection() {
    }

    public Inspection(Ship ship, DockOfficer dockOfficer, String date) {
        this.ship = ship;
        this.dockOfficer = dockOfficer;
        this.date = date;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Ship getShip() {
        return ship;
    }

    public void setShip(Ship ship) {
        this.ship = ship;
    }

    public DockOfficer getDockOfficer() {
        return dockOfficer;
    }

    public void setDockOfficer(DockOfficer dockOfficer) {
        this.dockOfficer = dockOfficer;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
