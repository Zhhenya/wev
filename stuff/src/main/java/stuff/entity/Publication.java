package stuff.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Blob;

@Entity
@Table(name = "publication", schema = "wizard")
public class Publication {
    @Id
    @GeneratedValue
    private Long id;
    private Blob content;

    public Long getId() {
        return id;
    }

    public Blob getContent() {
        return content;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setContent(Blob content) {
        this.content = content;
    }
}