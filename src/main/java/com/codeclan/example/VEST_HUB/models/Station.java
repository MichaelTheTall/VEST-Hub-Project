package com.codeclan.example.VEST_HUB.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.List;

@Entity
@Table(name = "station")
public class Station {

    @Column(name = "name")
    private String name;

    @JsonIgnore
    @OneToMany(mappedBy = "berth")
    private List<Berth> berthList;

    @JsonIgnore
    @OneToMany(mappedBy = "passenger")
    private List<Passenger> station_passengers;

    @JsonIgnore
    @OneToMany(mappedBy = "dock_officer")
    private List<DockOfficer> station_dock_officers;

    @JsonIgnore
    @OneToMany(mappedBy = "ship")
    private List<Ship> previous_ships;

    public Station() {
    }

    public Station(String name) {
        this.name = name;
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

    public List<DockOfficer> getStation_dock_officers() {
        return station_dock_officers;
    }

    public void setStation_dock_officers(List<DockOfficer> station_dock_officers) {
        this.station_dock_officers = station_dock_officers;
    }
}
