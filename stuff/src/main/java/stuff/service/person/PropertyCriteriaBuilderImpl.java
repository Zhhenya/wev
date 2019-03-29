package stuff.service.person;

import org.springframework.beans.factory.annotation.Autowired;
import stuff.entity.Person;
import stuff.entity.Position;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

public class PropertyCriteriaBuilderImpl implements PropertyCriteriaBuilder {
    private final CriteriaBuilder criteriaBuilder;
    private final Root<Person> propertyEntity;

    @Autowired
    public PropertyCriteriaBuilderImpl(CriteriaBuilder criteriaBuilder,
                                       Root<Person> propertyEntity){
        this.criteriaBuilder = criteriaBuilder;
        this.propertyEntity = propertyEntity;
    }

    @Override
    public Predicate buildCaptionCriteria(String caption) {
        return criteriaBuilder.like(propertyEntity.get("caption"), "%" + caption + "%");
    }

    @Override
    public Predicate buildPositionCriteria(String position) {
        return criteriaBuilder.equal(propertyEntity.get("position").get("name"), position);
    }
}