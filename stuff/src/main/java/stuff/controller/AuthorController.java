package stuff.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import stuff.converter.AuthorConverter;
import stuff.dto.AuthorDto;
import stuff.service.author.AuthorService;

import java.util.List;

@RestController
public class AuthorController {
    private AuthorService authorService;
    private AuthorConverter authorConverter;

    @Autowired
    public AuthorController(AuthorService authorService,
                            AuthorConverter authorConverter) {
        this.authorService = authorService;
        this.authorConverter = authorConverter;
    }

    @RequestMapping("author/all")
    @ResponseBody
    public List<AuthorDto> fetchAll() {
        return authorService.fetchAll();
    }

    @RequestMapping("author/{id}")
    @ResponseBody
    public AuthorDto fetchPerson(@PathVariable("id") long authorId) {
        return authorService.fetch(authorId);
    }

    @RequestMapping(value = "author/save", method = RequestMethod.POST)
    @ResponseBody
    public void save(@RequestBody AuthorDto authorDto) {
        authorService.save(authorDto);
    }

    @RequestMapping(value = "author/delete", method = RequestMethod.POST)
    @ResponseBody
    public boolean delete(@RequestBody AuthorDto authorDto) {
        authorService.delete(authorDto);
        return true;
    }

}