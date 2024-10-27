package ru.darksecrets.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RouteDTO {
    private String name;
    private Integer num;
    private String arrival;
    private String departure;
}
