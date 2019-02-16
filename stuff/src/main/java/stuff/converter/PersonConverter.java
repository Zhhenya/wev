package stuff.converter;

import stuff.dto.PersonDto;
import stuff.entity.Person;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

@Service
@Lazy
public class PersonConverter implements Converter<Person, PersonDto> {
    @Override
    public PersonDto convert(Person person) {
        PersonDto personDto = new PersonDto();
        personDto.setAcademicTitle(person.getAcademicTitle());
        personDto.setBiography(person.getBiography());
        personDto.setFirstName(person.getFirstName());
        personDto.setInterests(person.getInterests());
        personDto.setSurname(person.getSurname());
        personDto.setPhoto(person.getPhoto());
        return personDto;
    }
}