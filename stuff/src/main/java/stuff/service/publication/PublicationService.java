package stuff.service.publication;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import stuff.dto.PublicationDto;
import stuff.entity.Publication;

import java.util.List;

@Service
@Lazy
public interface PublicationService {
    List<PublicationDto> fetchAll();

    PublicationDto fetch(long publicationId);

    Publication save(PublicationDto publicationDto);

    void delete(PublicationDto publicationDto);
}