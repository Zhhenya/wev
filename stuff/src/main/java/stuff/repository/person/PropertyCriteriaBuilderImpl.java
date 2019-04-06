package stuff.repository.person;

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
    public Predicate buildCaptionFirstNameCriteria(String firstName) {
        return criteriaBuilder.like(propertyEntity.get("firstName"), "%" + firstName + "%");
    }

    @Override
    public Predicate buildCaptionSurnameCriteria(String surname) {
        return criteriaBuilder.like(propertyEntity.get("surname"), "%" + surname + "%");
    }

    @Override
    public Predicate buildCaptionAcademicTitleCriteria(String academicTitle) {
        return criteriaBuilder.like(propertyEntity.get("academicTitle"), "%" + academicTitle + "%");
    }

    @Override
    public Predicate buildCaptionBiographyCriteria(String biography) {
        return criteriaBuilder.like(propertyEntity.get("biography"), "%" + biography + "%");
    }

    @Override
    public Predicate buildCaptionInterestsCriteria(String interests) {
        return criteriaBuilder.like(propertyEntity.get("interests"), "%" + interests + "%");
    }

    @Override
    public Predicate buildPositionCriteria(Position position) {
        return criteriaBuilder.equal(propertyEntity.get("position"), position);
    }
}