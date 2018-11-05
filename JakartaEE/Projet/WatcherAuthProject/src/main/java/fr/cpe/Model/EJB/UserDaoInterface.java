package fr.cpe.Model.EJB;

import fr.cpe.UserModel;

import javax.ejb.Local;

@Local
public interface UserDaoInterface {

     void save(UserModel user);


     UserModel getUserById(int id) ;



     UserModel getUserByLogin(String myLogin);
}
