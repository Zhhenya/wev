package stuff.service.author;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import stuff.dto.AuthorDto;
import stuff.entity.Author;

import java.util.List;

@Service
@Lazy
public interface AuthorService {
    List<AuthorDto> fetchAll();

    Author save(AuthorDto authorDto);

    void delete(AuthorDto authorDto);

    AuthorDto fetch(long authorId);
}