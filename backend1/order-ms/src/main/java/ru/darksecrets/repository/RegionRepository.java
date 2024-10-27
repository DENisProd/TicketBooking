package ru.darksecrets.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.darksecrets.model.Region;

@Repository
public interface RegionRepository extends JpaRepository<Region, Integer> {
}
