package fr.cpe;



import javax.ejb.Stateless;
import javax.json.Json;

import java.util.logging.Logger;

@Stateless
public class WatcherAuthServiceServerEJBImplementation implements WatcherAuthServiceEJB {

    Logger logger=Logger.getLogger("bijour");

    @Override
    public String authValid(UserModel myUser) {

        System.out.println("We are in the authValid method of the fr.cpe.Model.EJB");

        String jsonString = Json.createObjectBuilder()
                .add("login renvoye", myUser.getLogin())
                .add("validAuth",true)
                .add("role","ADMIN")
                .build()
                .toString();

        System.out.println(jsonString);



        return jsonString;


    }


}
