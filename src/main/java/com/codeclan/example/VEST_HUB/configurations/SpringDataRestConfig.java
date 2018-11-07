package com.codeclan.example.VEST_HUB.configurations;

import com.codeclan.example.VEST_HUB.models.*;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;

@Configuration
public class SpringDataRestConfig extends RepositoryRestConfigurerAdapter {


    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(Berth.class, Ship.class, Passenger.class, Station.class, Inspection.class, DockOfficer.class);
    }
}
