import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

@Path("/service")
public interface FirstRestService {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/addition")
    int addition(@QueryParam("a") int a,@QueryParam("b") int b);

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/soustraction")
    int soustraction(@QueryParam("a") int a,@QueryParam("b") int b);



}
