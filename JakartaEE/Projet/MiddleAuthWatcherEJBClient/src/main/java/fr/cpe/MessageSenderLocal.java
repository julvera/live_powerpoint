package fr.cpe;

import javax.ejb.Local;

@Local
public interface MessageSenderLocal {

    void sendMessage(String message);
    void sendMessage(UserModel user);
}
