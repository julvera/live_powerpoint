package fr.cpe.Model.Model;

import fr.cpe.Role;
import fr.cpe.Model.EJB.UserDaoInterface;
import fr.cpe.UserModel;
import javax.ejb.EJB;
import javax.ejb.Singleton;


@Singleton
public class DataContainer {


    @EJB
    UserDaoInterface myDB;

    UserModel tempUser;

    Role tempRole;


    public Role checkUser(UserModel user) {
        //Check in DB

        tempUser = myDB.getUserByLogin(user.getLogin());
        if(tempUser == null){
            return Role.NONE;
        }
        System.out.println("tempUser login : "+tempUser.getLogin());
        System.out.println("tempUser pwd : "+tempUser.getPwd());
        System.out.println("tempUser firstname : "+tempUser.getSurname());
        System.out.println("tempUser lastname : "+tempUser.getLastname());

        switch (tempUser.getRole()) {
            case "boss":
                tempRole = Role.boss;
                break;
            case "slave":
                tempRole = Role.slave;

                break;
            case "intern":
                tempRole = Role.intern;
                break;
        }
        return tempRole;

    }
}
