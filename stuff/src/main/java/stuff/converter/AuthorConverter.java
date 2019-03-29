package stuff.converter;

import stuff.dto.AuthorDto;
import stuff.entity.Author;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

@Service
@Lazy
public class AuthorConverter implements Converter<Author, AuthorDto> {
    private PersonConverter personConverter;
    private PublicationConverter publicationConverter;

    @Autowired
    public AuthorConverter(PersonConverter personConverter,
                           PublicationConverter publicationConverter) {
        this.personConverter = personConverter;
        this.publicationConverter = publicationConverter;
    }

    @Override
    public AuthorDto convert(Author author) {
        AuthorDto authorDto = new AuthorDto();
        authorDto.setId(author.getId());
        authorDto.setPersonDto(personConverter.convert(author.getPerson()));
        authorDto.setPublicationDto(publicationConverter.convert(author.getPublication()));
        return authorDto;
    }
}