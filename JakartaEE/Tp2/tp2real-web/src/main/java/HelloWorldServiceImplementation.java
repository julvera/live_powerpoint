import javax.inject.Inject;

public class HelloWorldServiceImplementation implements  HelloWorldService {

    @Inject IHelloWorldJmsProducer HelloWorldProducer_local;


    @Override
    public Void HelloWorld() {
         HelloWorldProducer_local.sendHelloWord();
        return null;
    }
}
