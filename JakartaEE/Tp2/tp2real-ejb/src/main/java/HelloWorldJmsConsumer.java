import javax.ejb.ActivationConfigProperty;
import javax.ejb.MessageDriven;
import javax.jms.JMSException;
import javax.jms.Message;
import javax.jms.MessageListener;
import javax.jms.TextMessage;
import java.util.logging.Logger;

/**
 * Created by ubuntu on 9/16/16.
 */
// On utilise l'annotation @MessageDriven pour configurer le listener sur la queue
@MessageDriven(name = "HelloWorldMDB", activationConfig = {
        @ActivationConfigProperty(propertyName = "destinationType", propertyValue = "javax.jms.Queue"),  // Queue ou Topic
        @ActivationConfigProperty(propertyName = "destination", propertyValue = "asi2-HelloWorld"),  // Nom JNDI
        @ActivationConfigProperty(propertyName = "acknowledgeMode", propertyValue = "Auto-acknowledge") })  // Configuration pour reconnaitre automatiquement les messages recus
// Le consumer doit implémenter l'interface MessageListener et définir la méthode onMessage(Message message)

public class HelloWorldJmsConsumer implements MessageListener {

    private static Logger logger = Logger.getLogger(HelloWorldJmsConsumer.class.getName());

    @Override
    public void onMessage(Message var1) {
        logger.info(">>> onMessage() - " + var1.toString());

        try {

            if (var1 instanceof TextMessage) {
                String msg = ((TextMessage) var1).getText();
                logger.info(msg);

                // Do something...
            }
        } catch (JMSException e) {
            e.printStackTrace();
        }

        logger.info("<<< onMessage()");
    }
}