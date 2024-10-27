package ru.darksecrets.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class WagonWithSeatsInfoDTO {
    private List<WagonWithSeatsDTO> wagons;
}
