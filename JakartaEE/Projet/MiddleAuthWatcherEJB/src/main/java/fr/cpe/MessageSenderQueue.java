package fr.cpe;

import javax.annotation.Resource;
import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.jms.JMSContext;
import javax.jms.JMSException;
import javax.jms.ObjectMessage;
import javax.jms.Queue;
import java.util.Date;


@Stateless
public class MessageSenderQueue implements MessageSenderQueueLocal{

    @Inject
    JMSContext context;
    @Resource(mappedName = "java:/jms/queue/watcherqueue")
    Queue queue;

    public void sendMessage(String message) {

        context.createProducer().send(queue, message);
    }

    public void sendMessage(UserModel user) {

        try {
            System.out.println("**************** Message Sender Queue EJB *****************");
            ObjectMessage message = context.createObjectMessage();
            message.setObject(user);
            context.createProducer().send(queue, user);
            System.out.println("Je push dans la QUEUE a " + new Date());
            System.out.println("role:"+user.getRole());

        } catch (JMSException e) {
            e.printStackTrace();
        }
    }
}
