package stuff.entity;

import javax.persistence.*;
import java.sql.Blob;
import java.util.List;

@Entity
@Table(name="person", schema = "wizard")
public class Person{
    @Id
    @GeneratedValue
    private Long id;
    private String surname;
    private String firstName;
    private String academicTitle;
    private String biography;
    private String interests;
    private Blob photo;
    @ManyToOne
    private Position position;

    public Long getId() {
        return id;
    }

    public String getSurname() {
        return surname;
    }

    @Basic
    @Column(name = "first_name", nullable = false, length = 45)
    public String getFirstName() {
        return firstName;
    }

    @Basic
    @Column(name = "academic_title", nullable = false, length = 400)
    public String getAcademicTitle() {
        return academicTitle;
    }

    public String getBiography() {
        return biography;
    }

    public String getInterests() {
        return interests;
    }

    public Blob getPhoto() {
        return photo;
    }

    public Position getPosition() {
        return position;
    }

    public void setId(Long id) {
        this.id = id;
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

    public void setPhoto(Blob photo) {
        this.photo = photo;
    }

    public void setPosition(Position position) {
        this.position = position;
    }
}