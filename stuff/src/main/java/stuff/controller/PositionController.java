package stuff.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import stuff.dto.PositionDto;
import stuff.service.position.PositionService;

import java.util.List;

@RestController
public class PositionController {
    private PositionService positionService;

    @Autowired
    public PositionController(PositionService positionService){
        this.positionService = positionService;
    }

    @RequestMapping("position/all")
    @ResponseBody
    public List<PositionDto> fetchAll(){
        return positionService.fetchAll();
    }

    @RequestMapping("position/{id}")
    @ResponseBody
    public PositionDto fetchPerson(@PathVariable("id") long personId) {
        return positionService.fetch(personId);
    }

    @RequestMapping(value = "position/save", method = RequestMethod.POST)
    @ResponseBody
    public void save(@RequestBody PositionDto positionDto) {
        positionService.save(positionDto);
    }

    @RequestMapping(value = "position/delete", method = RequestMethod.POST)
    @ResponseBody
    public boolean delete(@RequestBody PositionDto positionDto){
        positionService.delete(positionDto);
        return true;
    }
}