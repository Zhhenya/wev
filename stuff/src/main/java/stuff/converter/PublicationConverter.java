package stuff.converter;

import stuff.dto.PublicationDto;
import stuff.entity.Publication;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

@Service
@Lazy
public class PublicationConverter implements Converter<Publication, PublicationDto> {
    @Override
    public PublicationDto convert(Publication publication) {
        PublicationDto publicationDto = new PublicationDto();
        publicationDto.setContent(publication.getContent());
        return publicationDto;
    }
}