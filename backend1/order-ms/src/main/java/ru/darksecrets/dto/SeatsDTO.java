package ru.darksecrets.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.darksecrets.model.WagonTypes;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SeatsDTO {
    private Integer seat_id;
    private Integer seatNum;
    private Integer block;
    private Integer price;
}
