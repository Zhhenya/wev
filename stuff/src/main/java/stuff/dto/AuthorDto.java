package stuff.dto;

public class AuthorDto {
    private Long id;
    private PublicationDto publicationDto;
    private PersonDto personDto;

    public PublicationDto getPublicationDto() {
        return publicationDto;
    }

    public PersonDto getPersonDto() {
        return personDto;
    }

    public void setPublicationDto(PublicationDto publicationDto) {
        this.publicationDto = publicationDto;
    }

    public void setPersonDto(PersonDto personDto) {
        this.personDto = personDto;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}