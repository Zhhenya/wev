package stuff.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import stuff.dto.PublicationDto;
import stuff.service.publication.PublicationService;

import java.util.List;

@RestController
public class PublicationController {
    private PublicationService publicationService;

    @Autowired
    public PublicationController(PublicationService publicationService) {
        this.publicationService = publicationService;
    }

    @RequestMapping("publication/all")
    @ResponseBody
    public List<PublicationDto> fetchAll() {
        return publicationService.fetchAll();
    }

    @RequestMapping("publication/{id}")
    @ResponseBody
    public PublicationDto fetchPerson(@PathVariable("id") long publicationId) {
        return publicationService.fetch(publicationId);
    }

    @RequestMapping(value = "publication/save", method = RequestMethod.POST)
    @ResponseBody
    public void save(@RequestBody PublicationDto publicationDto) {
        publicationService.save(publicationDto);
    }

    @RequestMapping(value = "publication/delete", method = RequestMethod.POST)
    @ResponseBody
    public boolean delete(@RequestBody PublicationDto publicationDto) {
        publicationService.delete(publicationDto);
        return true;
    }
}