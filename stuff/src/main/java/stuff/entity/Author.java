package stuff.entity;

import javax.persistence.*;

@Entity
@Table(name = "author", schema = "wizard")
public class Author {
    @Id
    @GeneratedValue
    private Long id;
    @ManyToOne
    private Publication publication;
    @ManyToOne
    private Person person;

    public Long getId() {
        return id;
    }

    public Publication getPublication() {
        return publication;
    }

    public Person getPerson() {
        return person;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setPublication(Publication publication) {
        this.publication = publication;
    }

    public void setPerson(Person person) {
        this.person = person;
    }
}