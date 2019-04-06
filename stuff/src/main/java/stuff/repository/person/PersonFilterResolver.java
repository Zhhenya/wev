package stuff.repository.person;

import stuff.dto.PersonFilterDto;
import stuff.entity.Person;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.List;

public interface PersonFilterResolver {
    List<Predicate> resolve(PersonFilterDto filterDto,
                            CriteriaBuilder criteriaBuilder,
                            Root<Person> propertyEntity);
}
