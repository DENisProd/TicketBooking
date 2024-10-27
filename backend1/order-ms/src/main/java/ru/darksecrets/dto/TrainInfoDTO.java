package ru.darksecrets.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TrainInfoDTO {
    private Integer train_id;
    private String global_route;
    private String startpoint_departure;
    private String endpoint_arrival;
    private Integer available_seats_count;
    private List<WagonInfoDTO> wagons_info;
    private List<RouteDTO> detailed_route;
}
