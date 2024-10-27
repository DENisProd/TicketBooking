package ru.darksecrets.controller;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import ru.darksecrets.model.City;
import ru.darksecrets.service.CityService;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/city")
@CrossOrigin(value = "*")
// TODO: configure cors
@AllArgsConstructor
public class CityController {

    private final CityService cityService;

    @GetMapping()
    public List<City> searchCity(@RequestParam("value") String value) {
        var findedCities = cityService.findCities(value);

        return findedCities;
    }

    @PostMapping("/import")
    public String importCities(@RequestParam("file") MultipartFile file) {
        try {
            cityService.importCitiesFromFile(file);
            return "Импорт городов завершен";
        } catch (IOException e) {
            return "Ошибка при импорте: " + e.getMessage();
        }
    }
}
