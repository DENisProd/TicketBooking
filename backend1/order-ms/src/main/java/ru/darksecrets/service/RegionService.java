package ru.darksecrets.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import ru.darksecrets.dto.RegionDTO;
import ru.darksecrets.model.Region;
import ru.darksecrets.repository.RegionRepository;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class RegionService {
    private final RegionRepository regionRepository;
    private final ObjectMapper objectMapper;

    public void importRegionsFromFile(MultipartFile file) throws IOException {
        List<RegionDTO> regionDTOs = objectMapper.readValue(
                file.getInputStream(),
                new TypeReference<>() {}
        );

        List<Region> regions = regionDTOs.stream().map(dto -> {
            Region region = new Region();
            region.setRegionId(dto.id());
            region.setName(dto.name());
            return region;
        }).collect(Collectors.toList());

        regionRepository.saveAll(regions);
    }
}
