package fr.cpe;

import javax.ejb.Local;


@Local
public interface WatcherAuthServiceEJB {

    String authValid(UserModel myUser);
}
