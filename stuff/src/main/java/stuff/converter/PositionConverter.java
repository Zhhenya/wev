package stuff.converter;

import stuff.dto.PositionDto;
import stuff.entity.Position;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

@Service
@Lazy
public class PositionConverter implements Converter<Position, PositionDto> {
    @Override
    public PositionDto convert(Position position) {
        PositionDto positionDto = new PositionDto();
        positionDto.setName(position.getName());
        return positionDto;
    }
}