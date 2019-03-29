package stuff.service.person;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import stuff.converter.PersonConverter;
import stuff.dto.PersonDto;
import stuff.dto.PersonFilterDto;
import stuff.entity.Person;
import stuff.repository.PersonRepository;
import stuff.repository.PositionRepository;

import java.util.List;

@Service
@Lazy
public class PersonServiceImpl implements PersonService {
    private PersonRepository personRepository;
    private PersonConverter personConverter;
    private PositionRepository positionRepository;
    private PersonCriteriaRepository personCriteriaRepository;

    @Autowired
    public PersonServiceImpl(PersonRepository personRepository,
                             PersonConverter personConverter,
                             PositionRepository positionRepository,
                             PersonCriteriaRepository personCriteriaRepository){
        this.personRepository = personRepository;
        this.personConverter = personConverter;
        this.positionRepository = positionRepository;
        this.personCriteriaRepository = personCriteriaRepository;
    }

    @Override
    public List<PersonDto> findAll() {
        return personConverter.convertAll(personRepository.findAll());
    }

    @Override
    public PersonDto fetch(long personId) {
        return personConverter.convert(personRepository.getOne(personId));
    }

    @Override
    public Person save(PersonDto personDto) {
        Person person = new Person();
        if(personDto.getId() != null) {
            person = personRepository.getOne(personDto.getId());
        }

        person.setPosition(positionRepository.getOne(personDto.getPositionDto().getId()));
        person.setAcademicTitle(personDto.getAcademicTitle());
        person.setFirstName(personDto.getFirstName());
        person.setBiography(personDto.getBiography());
        person.setInterests(personDto.getInterests());
        person.setSurname(personDto.getSurname());
        return personRepository.save(person);
    }

    @Override
    public void delete(PersonDto personDto) {
        personRepository.delete(personRepository.getOne(personDto.getId()));
    }

    @Override
    public List<PersonDto> fetchFiltered(PersonFilterDto personFilterDto) {
        return personConverter.convertAll(
                personCriteriaRepository.findFiltered(personFilterDto));
    }
}