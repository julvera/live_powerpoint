package fr.cpe;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("/WatcherAuth")
public interface WatcherAuthService {

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    String WebServiceFunction(UserModel myUser);


}
