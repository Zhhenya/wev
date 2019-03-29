package stuff.service.publication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import stuff.converter.PublicationConverter;
import stuff.dto.PublicationDto;
import stuff.entity.Publication;
import stuff.repository.PublicationRepository;

import java.util.List;

@Service
@Lazy
public class PublicationServiceImpl implements PublicationService {
    private PublicationConverter publicationConverter;
    private PublicationRepository publicationRepository;

    @Autowired
    public PublicationServiceImpl(PublicationConverter publicationConverter,
                                  PublicationRepository publicationRepository) {
        this.publicationConverter = publicationConverter;
        this.publicationRepository = publicationRepository;
    }

    @Override
    public List<PublicationDto> fetchAll() {
        return publicationConverter.convertAll(publicationRepository.findAll());
    }

    @Override
    public PublicationDto fetch(long publicationId) {
        return publicationConverter.convert(publicationRepository.getOne(publicationId));
    }

    @Override
    public Publication save(PublicationDto publicationDto) {
        Publication publication = new Publication();
        if (publicationDto.getId() != null) {
            publication = publicationRepository.getOne(publicationDto.getId());
        }
        publication.setContent(publicationDto.getContent());
        return publicationRepository.save(publication);
    }

    @Override
    public void delete(PublicationDto publicationDto) {
        publicationRepository.delete(publicationRepository.getOne(publicationDto.getId()));
    }
}