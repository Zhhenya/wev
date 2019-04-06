package stuff.repository.person;

import stuff.entity.Position;

import javax.persistence.criteria.Predicate;

public interface PropertyCriteriaBuilder {
    Predicate buildCaptionFirstNameCriteria(String firstName);
    Predicate buildCaptionSurnameCriteria(String surname);
    Predicate buildCaptionAcademicTitleCriteria(String academicTitle);
    Predicate buildCaptionBiographyCriteria(String biography);
    Predicate buildCaptionInterestsCriteria(String interests);
    Predicate buildPositionCriteria(Position position);
}
