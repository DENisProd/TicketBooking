package ru.darksecrets.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.darksecrets.dto.ResponseDTO;
import ru.darksecrets.service.TicketService;

import java.util.List;

@RestController
@RequestMapping("api/tickets")
@CrossOrigin(value = "*")
@AllArgsConstructor
public class TicketController {
    private final TicketService ticketService;

    @GetMapping("/trains")
    public ResponseEntity<ResponseDTO> getTrains(
            @RequestParam("from") String fromCity,
            @RequestParam("to") String toCity
    ) {
        var trains = ticketService.getTrainInfo(fromCity, toCity);

        return ResponseEntity.ok(new ResponseDTO("ok", true, trains));
    }
}
