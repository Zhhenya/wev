package stuff.entity;

import javax.persistence.*;

@Entity
@Table(name = "position", schema = "wizard")
public class Position {
    @Id
    @GeneratedValue
    private Long id;
    private String name;

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

}