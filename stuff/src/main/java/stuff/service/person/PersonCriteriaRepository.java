package stuff.service.person;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import stuff.dto.PersonFilterDto;
import stuff.entity.Person;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.List;

@Repository
public class PersonCriteriaRepository {
    @PersistenceContext
    private EntityManager entityManager;
    private final PersonFilterResolver personFilterResolver;

    @Autowired
    public PersonCriteriaRepository(PersonFilterResolver personFilterResolver) {
        this.personFilterResolver = personFilterResolver;
    }

    public List<Person> findFiltered(PersonFilterDto personFilterDto) {
        CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        CriteriaQuery<Person> query = builder.createQuery(Person.class);
        Root<Person> entityRoot = query.from(Person.class);
        query.where(personFilterResolver.resolve(personFilterDto, builder, entityRoot)
                .toArray(new Predicate[0]));
        return entityManager.createQuery(query).getResultList();
    }
}