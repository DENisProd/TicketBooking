package ru.darksecrets.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import ru.darksecrets.dto.TrainInfoDTO;
import ru.darksecrets.dto.TrainInfoResponseDTO;
import ru.darksecrets.dto.WagonWithSeatsDTO;
import ru.darksecrets.dto.WagonWithSeatsInfoDTO;

import java.util.List;

@Service
public class TicketService {
    @Value("${application.api_url}")
    private String apiUrl;

    public List<TrainInfoDTO> getTrainInfo(String fromCity, String toCity) {
        RestTemplate restTemplate = new RestTemplate();
        String resourceUrl = apiUrl + "/info/trains?start_point=" + fromCity + "&end_point=" + toCity + "&booking_available=true";

        ResponseEntity<TrainInfoResponseDTO> response = restTemplate.getForEntity(
                resourceUrl,
                TrainInfoResponseDTO.class
        );

        if (response.getStatusCode().is2xxSuccessful()) {
            return response.getBody().getTrains();
        } else {
            throw new RuntimeException("Failed to fetch train information from API");
        }
    }

    public List<WagonWithSeatsDTO> getWagonInfo(Integer trainId) {
        RestTemplate restTemplate = new RestTemplate();
        String resourceUrl = apiUrl + "/info/wagons?trainId=" + trainId;

        ResponseEntity<WagonWithSeatsInfoDTO> response = restTemplate.getForEntity(
                resourceUrl,
                WagonWithSeatsInfoDTO.class
        );

        if (response.getStatusCode().is2xxSuccessful()) {
            return response.getBody().getWagons();
        } else {
            throw new RuntimeException("Failed to fetch train information from API");
        }
    }
}
