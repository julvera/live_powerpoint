package fr.cpe;

import javax.ejb.Local;

@Local
public interface MessageSenderQueueLocal {


    void sendMessage(String message);
    void sendMessage(UserModel user);

}
