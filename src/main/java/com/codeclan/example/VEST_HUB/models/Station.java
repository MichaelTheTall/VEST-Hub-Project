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

}
