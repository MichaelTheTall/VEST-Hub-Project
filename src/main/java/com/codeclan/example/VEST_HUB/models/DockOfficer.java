package com.codeclan.example.VEST_HUB.models;

import java.util.ArrayList;
import java.util.List;

public class DockOfficer {

    private int id;

    private String name;
    private List<Ship> inspected;

    public DockOfficer(String name) {
        this.name = name;
        this.inspected = new ArrayList<>();
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

    public List<Ship> getInspected() {
        return inspected;
    }

    public void setInspected(List<Ship> inspected) {
        this.inspected = inspected;
    }



}
