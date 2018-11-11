package fr.cpe.implementation;

import fr.cpe.*;

import javax.ejb.EJB;
import javax.inject.Inject;


public class WatcherAuthServiceImplementation  implements WatcherAuthService {


    @Inject
    WatcherAuthServiceEJB authservice;

    @EJB
    MessageSenderLocal myMessage;

    @EJB
    MessageReceiverSyncLocal myReceiver;


    @Override
    public String WebServiceFunction(UserModel myUser) {

        String JsonAuth;

        System.out.println("DEBUT DU WS *********************");
        System.out.println("WatcherAUthServiceImplementation Class : WebServiceFunction => WS bien appele");

        if(myUser.getLogin() != null ||  myUser.getPwd() != null ) {
            myMessage.sendMessage(myUser);
            JsonAuth = myReceiver.receiveMessage();
            return JsonAuth;
        }
        else{
            return "No Data";
        }
    }
}
