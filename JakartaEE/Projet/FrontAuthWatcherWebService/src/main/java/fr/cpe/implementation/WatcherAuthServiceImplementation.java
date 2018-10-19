package fr.cpe.implementation;

import fr.cpe.WatcherAuthService;
import fr.cpe.WatcherAuthServiceEJB;

import javax.inject.Inject;


public class WatcherAuthServiceImplementation  implements WatcherAuthService {

    @Inject
    WatcherAuthServiceEJB authservice;


    @Override
    public boolean isValid(String user, String password) {

        return authservice.authValid();
    }
}
