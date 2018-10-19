import javax.ejb.Stateless;
import java.util.logging.Logger;

@Stateless
public class FirstEJBImplementation implements FirstEJB {

    Logger logger = Logger.getLogger(FirstEJB.class.getName());

    @Override
    public int add(int a,int b) {
        logger.info("add: " + a + " & " + b);

        return a + b;
    }

    @Override
    public int sous(int a,int b) {
        logger.info("sous: " + a + " & " + b);
        return a - b;
    }
}
