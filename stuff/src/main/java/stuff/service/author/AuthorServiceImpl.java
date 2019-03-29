package stuff.service.author;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import stuff.converter.AuthorConverter;
import stuff.dto.AuthorDto;
import stuff.entity.Author;
import stuff.entity.Person;
import stuff.entity.Position;
import stuff.entity.Publication;
import stuff.repository.AuthorRepository;
import stuff.repository.PersonRepository;
import stuff.repository.PositionRepository;
import stuff.repository.PublicationRepository;

import java.util.List;

@Service
@Lazy
public class AuthorServiceImpl implements AuthorService {
    private AuthorRepository authorRepository;
    private PublicationRepository publicationRepository;
    private PositionRepository positionRepository;
    private PersonRepository personRepository;
    private AuthorConverter authorConverter;

    @Autowired
    public AuthorServiceImpl(AuthorRepository authorRepository,
                             AuthorConverter authorConverter,
                             PublicationRepository publicationRepository,
                             PositionRepository positionRepository,
                             PersonRepository personRepository) {
        this.authorRepository = authorRepository;
        this.authorConverter = authorConverter;
        this.publicationRepository = publicationRepository;
        this.positionRepository = positionRepository;
        this.personRepository = personRepository;
    }

    @Override
    public List<AuthorDto> fetchAll() {
        return authorConverter.convertAll(authorRepository.findAll());
    }

    @Override
    public Author save(AuthorDto authorDto) {
        Author author = new Author();
        Person person = new Person();
        Publication publication = new Publication();
        if (authorDto.getId() != null) {
            author = authorRepository.getOne(authorDto.getId());
        }
        publication = publicationRepository.getOne(authorDto.getPublicationDto().getId());
        person = personRepository.getOne(authorDto.getPersonDto().getId());
        author.setPerson(person);
        author.setPublication(publication);
        return authorRepository.save(author);
    }

    @Override
    public void delete(AuthorDto authorDto) {
        authorRepository.delete(authorRepository.getOne(authorDto.getId()));
    }

    @Override
    public AuthorDto fetch(long authorId) {
        return authorConverter.convert(authorRepository.getOne(authorId));
    }
}