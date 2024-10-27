package ru.darksecrets;

import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class QueueConsumer {

    public void receive(@Payload String fileBody) {
        log.info("Message: {}", fileBody);
    }
}
