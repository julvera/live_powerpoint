package fr.cpe.Model.EJB;


import fr.cpe.MessageSenderQueueLocal;
import fr.cpe.Model.Model.DataContainer;
import fr.cpe.Role;
import fr.cpe.UserModel;

import javax.ejb.ActivationConfigProperty;
import javax.ejb.EJB;
import javax.ejb.MessageDriven;
import javax.inject.Inject;
import javax.jms.*;
import java.util.Date;

@MessageDriven(
        activationConfig = {
                @ActivationConfigProperty(
                        propertyName = "destinationType",
                        propertyValue = "javax.jms.Topic"),
                @ActivationConfigProperty(
                        propertyName = "destination",
                        propertyValue = "java:/jms/watcherAuthJMS")
        })

public class AuthWatcherMessageDrivenEJB implements MessageListener {
    private static final long serialVersionUID = 1L;

    @Inject
    DataContainer dataContainer;

    @EJB
    MessageSenderQueueLocal sender;


    public AuthWatcherMessageDrivenEJB() {

    }

    @Override
    public void onMessage(Message message) {
        try {
            if (message instanceof TextMessage) {

                System.out.println("Topic: I received a TextMessage at " + new Date() + " from the topic");
                TextMessage msg = (TextMessage) message;
                System.out.println("Message is : " + msg.getText());

            } else if (message instanceof ObjectMessage) {

                System.out.println("Topic: I received an ObjectMessage at "+ new Date() + " from the topic");
                ObjectMessage msg = (ObjectMessage) message;

                if( msg.getObject() instanceof UserModel){

                    UserModel user=(UserModel)msg.getObject();

                    System.out.println("***************User Details: *************** ");
                    System.out.println("login:"+user.getLogin());
                    System.out.println("pwd:"+user.getPwd());


                    Role currentTestRole=dataContainer.checkUser(user);
                    System.out.println("Current test Role : "+ currentTestRole.toString());

                    user.setRole(currentTestRole.toString());
                    sender.sendMessage(user);

                }
            } else {
                System.out.println("Not valid message for this Queue MDB");
            }
        } catch (JMSException e) {
            e.printStackTrace();
        }
    }
 }

