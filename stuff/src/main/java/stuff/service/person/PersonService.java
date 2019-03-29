package stuff.service.person;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import stuff.dto.PersonDto;
import stuff.dto.PersonFilterDto;
import stuff.entity.Person;

import java.util.List;

@Service
@Lazy
public interface PersonService {
    List<PersonDto> findAll();

    PersonDto fetch(long personId);

    Person save(PersonDto personDto);

    void delete(PersonDto personDto);

    List<PersonDto> fetchFiltered(PersonFilterDto personFilterDto);
}