package ru.darksecrets.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import ru.darksecrets.dto.CityDTO;
import ru.darksecrets.model.City;
import ru.darksecrets.model.Region;
import ru.darksecrets.repository.CityRepository;
import ru.darksecrets.repository.RegionRepository;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class CityService {
    private final CityRepository cityRepository;
    private final RegionRepository regionRepository;
    private final ObjectMapper objectMapper;

    public List<City> findCities(String value) {
        return cityRepository.findByNameContainingIgnoreCase(value);
    }

    public void importCitiesFromFile(MultipartFile file) throws IOException {
        List<CityDTO> cityDTOs = objectMapper.readValue(
                file.getInputStream(),
                new TypeReference<>() {}
        );

        List<City> cities = cityDTOs.stream().map(dto -> {
            City city = new City();
            city.setName(dto.name());
            city.setCoordinates(dto.coordinates());

            Optional<Region> region = regionRepository.findById(dto.region_id());
            region.ifPresent(city::setRegion);

            return city;
        }).collect(Collectors.toList());

        cityRepository.saveAll(cities);
    }
}
