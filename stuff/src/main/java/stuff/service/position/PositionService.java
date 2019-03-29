package stuff.service.position;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import stuff.dto.PositionDto;
import stuff.entity.Position;

import java.util.List;

@Service
@Lazy
public interface PositionService {
    List<PositionDto> fetchAll();

    PositionDto fetch(long positionId);

    Position save(PositionDto positionDto);

    void delete(PositionDto positionDto);
}
