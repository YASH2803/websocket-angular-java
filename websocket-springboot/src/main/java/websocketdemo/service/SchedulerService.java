package websocketdemo.service;

import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.util.HtmlUtils;
import websocketdemo.bean.Greeting;
import websocketdemo.bean.HelloMessage;

import java.text.SimpleDateFormat;
import java.util.Date;

@Service
public class SchedulerService {

    @Scheduled(fixedRate = 1000)
    public void sendMessage(SimpMessagingTemplate simpMessagingTemplate, HelloMessage message) {
        String time = new SimpleDateFormat("HH:mm").format(new Date());
        simpMessagingTemplate.convertAndSend("/topic/greetings",
                new Greeting("Hello, " + HtmlUtils.htmlEscape(message.getName()) + "!"));
    }
}
