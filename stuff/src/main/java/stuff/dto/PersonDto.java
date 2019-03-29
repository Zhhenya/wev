package stuff.dto;

public class PersonDto {
    private Long id;
    private String surname;
    private String firstName;
    private String academicTitle;
    private String biography;
    private String interests;
  //  private Blob photo;
    private PositionDto positionDto;

    public String getSurname() {
        return surname;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getAcademicTitle() {
        return academicTitle;
    }

    public String getBiography() {
        return biography;
    }

    public String getInterests() {
        return interests;
    }

    public PositionDto getPositionDto() {
        return positionDto;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setAcademicTitle(String academicTitle) {
        this.academicTitle = academicTitle;
    }

    public void setBiography(String biography) {
        this.biography = biography;
    }

    public void setInterests(String interests) {
        this.interests = interests;
    }

    public void setPositionDto(PositionDto positionDto) {
        this.positionDto = positionDto;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}