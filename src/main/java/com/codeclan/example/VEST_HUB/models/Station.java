package com.codeclan.example.VEST_HUB.models;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.List;

@Entity
@Table(name = "station")
public class Station {

    private List<Berth> berthList;

    private List<Passenger> station_passengers;

    private List<DockOfficer> station_dock_officers;

    public Station() {
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
