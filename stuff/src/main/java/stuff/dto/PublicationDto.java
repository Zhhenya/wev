package stuff.dto;

import java.sql.Blob;

public class PublicationDto {
    private Blob content;

    public Blob getContent() {
        return content;
    }

    public void setContent(Blob content) {
        this.content = content;
    }
}