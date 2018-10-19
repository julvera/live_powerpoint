package fr.cpe;

import javax.ejb.Local;

@Local
public interface WatcherAuthServiceEJB {

    boolean authValid();
}
