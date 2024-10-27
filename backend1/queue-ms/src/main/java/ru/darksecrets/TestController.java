package ru.darksecrets;

import lombok.AllArgsConstructor;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("api/")
public class TestController {
    private final TestService testService;

    @GetMapping
    public ResponseEntity<String> test () {
        testService.check();

        return ResponseEntity.ok().body("okay");
    }
}
