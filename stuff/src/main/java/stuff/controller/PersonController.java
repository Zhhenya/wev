package stuff.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import stuff.dto.PersonDto;
import stuff.dto.PersonFilterDto;
import stuff.service.person.PersonService;

import java.util.List;

@RestController
public class PersonController {
    private PersonService personService;

    @Autowired
    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    @RequestMapping("person/all")
    @ResponseBody
    public List<PersonDto> fetchAll() {
        return personService.findAll();
    }

    @RequestMapping("person/{id}")
    @ResponseBody
    public PersonDto fetchPerson(@PathVariable("id") long personId) {
        return personService.fetch(personId);
    }

    @RequestMapping(value = "person/save", method = RequestMethod.POST)
    @ResponseBody
    public void save(@RequestBody PersonDto personDto) {
        personService.save(personDto);
    }

    @RequestMapping(value = "person/delete", method = RequestMethod.POST)
    @ResponseBody
    public boolean delete(@RequestBody PersonDto personDto) {
        personService.delete(personDto);
        return true;
    }

    @RequestMapping(value = "person/filtered", method = RequestMethod.POST)
    @ResponseBody
    public List<PersonDto> fetchFiltered(@RequestBody PersonFilterDto filter) {
        return personService.fetchFiltered(filter);
    }
}