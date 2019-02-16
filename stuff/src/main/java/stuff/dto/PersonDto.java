package stuff.dto;

import java.sql.Blob;

public class PersonDto {
    private String surname;
    private String firstName;
    private String academicTitle;
    private Blob biography;
    private Blob interests;
    private Blob photo;
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

    public Blob getBiography() {
        return biography;
    }

    public Blob getInterests() {
        return interests;
    }

    public Blob getPhoto() {
        return photo;
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

    public void setBiography(Blob biography) {
        this.biography = biography;
    }

    public void setInterests(Blob interests) {
        this.interests = interests;
    }

    public void setPhoto(Blob photo) {
        this.photo = photo;
    }

    public void setPositionDto(PositionDto positionDto) {
        this.positionDto = positionDto;
    }
}