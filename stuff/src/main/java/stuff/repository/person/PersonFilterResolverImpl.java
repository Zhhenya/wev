package stuff.repository.person;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import stuff.dto.PersonFilterDto;
import stuff.dto.PositionDto;
import stuff.entity.Person;
import stuff.exception.PositionNotFoundException;
import stuff.repository.PositionRepository;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class PersonFilterResolverImpl implements PersonFilterResolver {
    private PositionRepository positionRepository;
    private PropertyCriteriaBuilder propertyCriteriaBuilder;

    @Autowired
    public PersonFilterResolverImpl(PositionRepository positionRepository) {
        this.positionRepository = positionRepository;
    }

    @Override
    public List<Predicate> resolve(PersonFilterDto filterDto,
                                   CriteriaBuilder criteriaBuilder,
                                   Root<Person> propertyEntity) {
        propertyCriteriaBuilder = new PropertyCriteriaBuilderImpl(criteriaBuilder, propertyEntity);
        return Stream.of(resolveCaptionFirstName(filterDto.getFirstName()),
                         resolveCaptionSurname(filterDto.getSurname()),
                         resolveCaptionBiography(filterDto.getBiography()),
                         resolveCaptionInterests(filterDto.getInterests()),
                         resolveCaptionAcademicTitle(filterDto.getAcademicTitle()),
                         resolvePosition(filterDto.getPositionDto()))
                     .filter(Objects::nonNull)
                     .collect(Collectors.toList());
    }

    private Predicate resolveCaptionFirstName(String firstName) {
        if (firstName == null || firstName.isEmpty()) {
            return null;
        }
        return propertyCriteriaBuilder.buildCaptionFirstNameCriteria(firstName);
    }

    private Predicate resolveCaptionSurname(String surname) {
        if (surname == null || surname.isEmpty()) {
            return null;
        }
        return propertyCriteriaBuilder.buildCaptionSurnameCriteria(surname);
    }

    private Predicate resolveCaptionBiography(String biography) {
        if (biography == null || biography.isEmpty()) {
            return null;
        }
        return propertyCriteriaBuilder.buildCaptionBiographyCriteria(biography);
    }

    private Predicate resolveCaptionInterests(String interests) {
        if (interests == null || interests.isEmpty()) {
            return null;
        }
        return propertyCriteriaBuilder.buildCaptionInterestsCriteria(interests);
    }

    private Predicate resolveCaptionAcademicTitle(String academicTitle) {
        if (academicTitle == null || academicTitle.isEmpty()) {
            return null;
        }
        return propertyCriteriaBuilder.buildCaptionAcademicTitleCriteria(academicTitle);
    }

    private Predicate resolvePosition(PositionDto positionDto) {
        if (positionDto == null) {
            return null;
        }
        return propertyCriteriaBuilder.buildPositionCriteria(
                positionRepository.findById(positionDto.getId())
                                  .orElseThrow(() -> new PositionNotFoundException(positionDto.getName())));
    }
}