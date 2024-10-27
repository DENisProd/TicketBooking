package ru.darksecrets.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import ru.darksecrets.model.WagonTypes;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class WagonWithSeatsDTO {
    private Integer wagon_id;
    private String type;
    private List<SeatsDTO> seats;
}
