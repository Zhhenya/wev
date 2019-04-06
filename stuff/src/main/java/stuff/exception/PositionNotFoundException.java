package stuff.exception;


import org.springframework.http.HttpStatus;

public class PositionNotFoundException extends StuffException {

    private static final String MESSAGE_ADDRESS = "Должность %s не найдена";
    private static final String MESSAGE_ID = "Должность #%s не найдена";
    private static final HttpStatus STATUS = HttpStatus.INTERNAL_SERVER_ERROR;

    public PositionNotFoundException(String address) {
        super(STATUS, MESSAGE_ADDRESS, address);
    }

    public PositionNotFoundException(Long id) {
        super(STATUS, MESSAGE_ID, id.toString());
    }
}