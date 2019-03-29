package stuff.service.person;

import org.springframework.stereotype.Service;
import stuff.dto.PersonFilterDto;
import stuff.entity.Person;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.List;

@Service
public class PersonFilterResolverImpl implements PersonFilterResolver{
    @Override
    public List<Predicate> resolve(PersonFilterDto filterDto, CriteriaBuilder criteriaBuilder, Root<Person> propertyEntity) {
        return null;
    }
}