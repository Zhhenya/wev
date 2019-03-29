package stuff.service.position;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import stuff.converter.PositionConverter;
import stuff.dto.PositionDto;
import stuff.entity.Position;
import stuff.repository.PositionRepository;

import java.util.List;

@Service
@Lazy
public class PositionServiceImpl implements PositionService {
    private PositionRepository positionRepository;
    private PositionConverter positionConverter;

    @Autowired
    public PositionServiceImpl(PositionRepository positionRepository, PositionConverter positionConverter) {
        this.positionRepository = positionRepository; this.positionConverter = positionConverter;
    }

    @Override
    public List<PositionDto> fetchAll() {
        return positionConverter.convertAll(positionRepository.findAll());
    }

    @Override
    public PositionDto fetch(long positionId) {
        return positionConverter.convert(positionRepository.getOne(positionId));
    }

    @Override
    public Position save(PositionDto positionDto) {
        Position position = new Position();
        if (positionDto.getId() != null) {
            position = positionRepository.getOne(positionDto.getId());
        }
        position.setName(positionDto.getName());
        return positionRepository.save(position);
    }

    @Override
    public void delete(PositionDto positionDto) {
        positionRepository.delete(positionRepository.getOne(positionDto.getId()));
    }
}