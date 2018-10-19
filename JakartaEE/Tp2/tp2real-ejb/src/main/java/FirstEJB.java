import javax.ejb.Local;

@Local
public interface FirstEJB {
    int add(int a, int b);
    int sous(int a, int b);

}
