package fr.cpe;

import javax.ejb.Local;

@Local
public interface MessageReceiverSyncLocal {
    String receiveMessage();
}
