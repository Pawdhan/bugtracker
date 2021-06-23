package com.demo.services;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import com.demo.models.Book;

@Service
public class KafkaConsumerListener {


    @KafkaListener(topics = "kafka_topic_name", groupId="kafka_json", containerFactory = "userKafkaListenerFactory")
    public void consumeJson(Book book) {
        System.out.println("Consumed JSON Message: " + book);
    }
    
}