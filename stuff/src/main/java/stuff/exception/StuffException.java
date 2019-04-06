package stuff.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class StuffException extends ResponseStatusException {

    public StuffException(HttpStatus status, String message, String... parameters) {
        super(status, String.format(message, parameters));
    }
}
