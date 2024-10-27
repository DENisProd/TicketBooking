package ru.darksecrets.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import ru.darksecrets.service.RegionService;

import java.io.IOException;

@RequestMapping("api/region")
@RestController
@CrossOrigin(value = "*")
@AllArgsConstructor
public class RegionController {
    private final RegionService regionService;

    @PostMapping("/import")
    public String importRegions(@RequestParam("file") MultipartFile file) {
        try {
            regionService.importRegionsFromFile(file);
            return "Импорт завершен";
        } catch (IOException e) {
            return "Ошибка при импорте: " + e.getMessage();
        }
    }
}
