package stuff.service.person;

import stuff.entity.Position;

import javax.persistence.criteria.Predicate;

public interface PropertyCriteriaBuilder {
    Predicate buildCaptionCriteria(String caption);
//    Predicate buildPropertyNumberCriteria(String numberGreater, String numberLess);
    Predicate buildPositionCriteria(String position);
}
