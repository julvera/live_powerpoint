package fr.cpe;

import javax.annotation.Resource;
import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.jms.*;
import javax.json.Json;
import java.util.Date;
import java.util.concurrent.TimeUnit;


@Stateless
@LocalBean
public class MessageReceiverSync implements MessageReceiverSyncLocal {


    @Inject
    JMSContext context;

    @Resource(mappedName = "java:/jms/queue/watcherqueue")
    Queue queue;

    public String receiveMessage() {

        String jsonString = null;

        System.out.println("Je commence a ecouter sur ma queue :");

        System.out.println("debut du sleep @" + new Date());

        Message message = context.createConsumer(queue).receive();
        try {
            TimeUnit.SECONDS.sleep(4);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("fin du sleep @" + new Date());


        try {
            if (message instanceof TextMessage) {

                System.out.println("Queue: I received a TextMessage at " + new Date() + " from the Queue Sender");
                TextMessage msg = (TextMessage) message;
                System.out.println("Message is : " + msg.getText());

            } else if (message instanceof ObjectMessage) {

                System.out.println("Queue: I received an ObjectMessage at " + new Date() + " from the Queue Sender");
                ObjectMessage msg = (ObjectMessage) message;

                if (msg.getObject() instanceof UserModel) {

                    UserModel user = (UserModel) msg.getObject();

                    System.out.println("*************** User Details: *************** ");
                    System.out.println("login:" + user.getLogin());
                    System.out.println("pwd:" + user.getPwd());
                    System.out.println("Role:" + user.getRole());

                    jsonString = Json.createObjectBuilder()
                            .add("role", user.getRole())
                            .build()
                            .toString();

                    System.out.println(jsonString);






                }
            } else {
                System.out.println("Not valid message for this Queue MDB");
            }
        } catch (JMSException e) {
            e.printStackTrace();
        }
        return jsonString;

    }

}