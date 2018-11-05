package com.codeclan.example.VEST_HUB.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "dock_officers")
public class DockOfficer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "dock_officer_id", nullable = false)
    private int id;

    @Column(name = "name")
    private String name;

    @JsonIgnore
    @OneToMany(mappedBy = "ship")
    private List<Ship> inspected;

    public DockOfficer() {
    }

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
