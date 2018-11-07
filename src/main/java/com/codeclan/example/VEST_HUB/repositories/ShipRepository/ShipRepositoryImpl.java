package com.codeclan.example.VEST_HUB.repositories.ShipRepository;

import com.codeclan.example.VEST_HUB.models.Ship;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

public class ShipRepositoryImpl implements ShipRepositoryCustom {

    @Autowired
    EntityManager entityManager;

    @Transactional
    public List<Ship> getArrivals(){
        List<Ship> results = null;
        Session session = entityManager.unwrap(Session.class);

        try {
            Criteria cr = session.createCriteria(Ship.class);
            cr.add(Restrictions.isNull("berth"));
            results = cr.list();
        } catch (Exception ex) {
            ex.printStackTrace();
        } finally {
            session.close();
        }

        return results;
    }

    @Transactional
    public List<Ship> getDepartures(){
        List<Ship> results = null;
        Session session = entityManager.unwrap(Session.class);

        try {
            Criteria cr = session.createCriteria(Ship.class);
            cr.add(Restrictions.isNotNull("berth"));
            results = cr.list();
        } catch (Exception ex) {
            ex.printStackTrace();
        } finally {
            session.close();
        }

        return results;
    }

}
