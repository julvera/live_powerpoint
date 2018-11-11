package fr.cpe;

import javax.annotation.Resource;
import javax.jms.*;
import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.inject.Inject;
import java.util.Date;


@Stateless
@LocalBean
public class MessageSender implements MessageSenderLocal {

    @Inject
    JMSContext context;

    @Resource(mappedName = "java:/jms/watcherAuthJMS") // On va injecte la queue déclarée sur le serveur via son nom JNDI
    Topic topic;



    public void sendMessage(String message) {
        context.createProducer()
                .send(topic, "Hello world !");
        System.out.println("Message Sender Class : Methode Send Message ( String )");

    }

    @Override
    public void sendMessage(UserModel user) {

        ObjectMessage message = context.createObjectMessage();
        try {
            message.setObject(user);
        } catch (JMSException e) {
            e.printStackTrace();
        }
        context.createProducer().send(topic, user);

        System.out.println("j'ai push dans le topic : "+new Date());
        System.out.println("*************** User Details: *************** ");
        System.out.println("login:"+user.getLogin());
        System.out.println("pwd:"+user.getPwd());
        System.out.println("Role:"+user.getRole());

    }
}