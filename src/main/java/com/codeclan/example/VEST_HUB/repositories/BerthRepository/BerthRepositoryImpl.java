package com.codeclan.example.VEST_HUB.repositories.BerthRepository;

import com.codeclan.example.VEST_HUB.models.Berth;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

public class BerthRepositoryImpl implements BerthRepositoryCustom {

    @Autowired
    EntityManager entityManager;

    @Transactional
    public List<Berth> getEmpty(){
        List<Berth> results = null;
        Session session = entityManager.unwrap(Session.class);

        try {
            Criteria cr = session.createCriteria(Berth.class);
            cr.add(Restrictions.isNull("docked_ship"));
            results = cr.list();
        } catch (Exception ex) {
            ex.printStackTrace();
        } finally {
            session.close();
        }

        return results;
    }

    @Transactional
    public List<Berth> getFull(){
        List<Berth> results = null;
        Session session = entityManager.unwrap(Session.class);

        try {
            Criteria cr = session.createCriteria(Berth.class);
            cr.add(Restrictions.isNotNull("docked_ship"));
            results = cr.list();
        } catch (Exception ex) {
            ex.printStackTrace();
        } finally {
            session.close();
        }

        return results;
    }

}
