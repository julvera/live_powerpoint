package fr.cpe;


import javax.ejb.Stateless;

@Stateless
public class WatcherAuthServiceServerEJBImplementation implements WatcherAuthServiceEJB {


    @Override
    public void authValid() {
        return false;
    }
}
