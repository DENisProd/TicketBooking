package ru.darksecrets;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
@Slf4j
public class TestService {
    @Autowired
    private RedisTemplate<String, Object> redisTemplate;

    public void insertTestValue() {
        // Вставляем тестовые данные
        redisTemplate.opsForValue().set("key2", "testValue");
    }

    public void check() {
        insertTestValue();
        Set<String> keys = redisTemplate.keys("*");
        var test2 = redisTemplate.opsForValue().get("key2");
        var test = redisTemplate.opsForValue().get("key");
      log.info("success");
    }
}
