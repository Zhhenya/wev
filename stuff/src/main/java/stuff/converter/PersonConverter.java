package stuff.converter;

import org.springframework.beans.factory.annotation.Autowired;
import stuff.dto.PersonDto;
import stuff.entity.Person;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

@Service
@Lazy
public class PersonConverter implements Converter<Person, PersonDto> {
    private PositionConverter positionConverter;

    @Autowired
    public PersonConverter(PositionConverter positionConverter){
        this.positionConverter = positionConverter;
    }
    @Override
    public PersonDto convert(Person person) {
        PersonDto personDto = new PersonDto();
        personDto.setId(person.getId());
        personDto.setAcademicTitle(person.getAcademicTitle());
        personDto.setBiography(person.getBiography());
        personDto.setFirstName(person.getFirstName());
        personDto.setInterests(person.getInterests());
        personDto.setSurname(person.getSurname());
        personDto.setPositionDto(positionConverter.convert(person.getPosition()));
      //  personDto.setPhoto(person.getPhoto());
        return personDto;
    }
}