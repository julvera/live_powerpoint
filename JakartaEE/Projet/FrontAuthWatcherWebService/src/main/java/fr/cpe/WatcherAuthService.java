package fr.cpe;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("/WatcherAuth")
public interface WatcherAuthService {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    boolean isValid(@QueryParam("user") String user, @QueryParam("password") String password);


}
