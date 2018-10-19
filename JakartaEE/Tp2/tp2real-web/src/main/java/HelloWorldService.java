import sun.plugin2.message.Message;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

@Path("/jms")
public interface HelloWorldService {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    Void HelloWorld();



}