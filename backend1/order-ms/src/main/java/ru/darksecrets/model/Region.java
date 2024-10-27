package ru.darksecrets.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Region {
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Integer regionId;
    private String name;

}
