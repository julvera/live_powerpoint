package fr.cpe.Model.EJB;

import fr.cpe.UserModel;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 * Created by ubuntu on 9/24/16.
 */

//@TransactionAttribute(TransactionAttributeType.REQUIRED)
@Stateless
public class UserDao implements UserDaoInterface {



    @PersistenceContext
    EntityManager em;

    public void save(UserModel user) {
        em.persist(user);
    }


    public UserModel getUserById(int id) {
        UserModel user = (UserModel)em.createQuery("SELECT u from UserModel u where u.id = :id")
                .setParameter("id", id)
                .getSingleResult();

        return user;
    }



    public UserModel getUserByLogin(String myLogin) {
        UserModel user = (UserModel)em.createQuery("SELECT u from UserModel u where u.login = :id")
                .setParameter("id", myLogin)
                .getSingleResult();

        return user;
    }

}