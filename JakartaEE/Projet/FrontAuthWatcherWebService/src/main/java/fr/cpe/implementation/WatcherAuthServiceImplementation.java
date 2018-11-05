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

         //return authservice.authValid(myUser);
         myMessage.sendMessage(myUser);
         JsonAuth =  myReceiver.receiveMessage();

//        System.out.println("FIN DU WS *********************");
        return JsonAuth;
    }
}
