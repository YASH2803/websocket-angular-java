package websocketdemo.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.HtmlUtils;

import websocketdemo.bean.Greeting;
import websocketdemo.bean.HelloMessage;
import websocketdemo.service.SchedulerService;

import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;

import static java.util.concurrent.TimeUnit.MILLISECONDS;
import static java.util.concurrent.TimeUnit.SECONDS;

@RestController
public class GreetingController {

  @Autowired
  private SchedulerService schedulerService;

  @Autowired
  private SimpMessagingTemplate simpMessagingTemplate;

  private static final ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(10);

  @MessageMapping("/hello")
  //@SendTo("/topic/greetings")
  public void greeting(HelloMessage message) {
    scheduler.scheduleAtFixedRate(() -> {
      simpMessagingTemplate.convertAndSend("/topic/greetings", new Greeting("Hello, " + HtmlUtils.htmlEscape(message.getName()) + "!"));
    }, 0, 500, MILLISECONDS);
  }

}