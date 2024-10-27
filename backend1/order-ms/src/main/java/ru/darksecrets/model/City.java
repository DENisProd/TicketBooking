package ru.darksecrets.model;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class City {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String coordinates;
    @ManyToOne
    @JoinColumn(name = "region_id")
    private Region region;
}
