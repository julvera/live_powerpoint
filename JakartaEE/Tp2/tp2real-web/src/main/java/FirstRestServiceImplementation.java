import javax.inject.Inject;

public class FirstRestServiceImplementation implements FirstRestService {

    @Inject
    private FirstEJB local_EJB;

    @Override
    public int addition(int a,int b) {
        return local_EJB.add(a,b);
    }

    @Override
    public int soustraction(int a,int b) {
        return local_EJB.sous(a,b);
    }


}
