import { Component, OnInit } from '@angular/core';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';

@Component({
  selector: 'app-wsockdemo',
  templateUrl: './wsockdemo.component.html',
  styleUrls: ['./wsockdemo.component.css']
})
export class WsockdemoComponent implements OnInit {
  title = 'app';

  greetings: string[] = [];
  showConversation: boolean = false;
  ws: any;
  name!: string;
  disabled!: boolean;

  constructor(){}
  ngOnInit(): void {
    
  }

  connect() {
    //connect to stomp where stomp endpoint is exposed
    let socket  = new SockJS('http://localhost:8080/gs-guide-websocket');
    this.ws = Stomp.over(socket);
    console.log(this.ws,"ws <===========");
    
    // let socket = new WebSocket("ws://localhost:8080/gs-guide-websocket");
    // this.ws = Stomp.over(socket);
    let that = this;
    this.ws.connect({}, function() {
      that.ws.subscribe("/topic/greetings", function(message: any) {
        console.log(message)
        that.showGreeting(JSON.parse(message.body));
      });
      that.ws.subscribe("/errors", function(message: any) {
        alert("Error " + message.body);
      });
      that.disabled = true;
    }, function(error: string) {
      alert("STOMP error " + error);
    });
  }

  disconnect() {
    if (this.ws != null) {
      this.ws.ws.close();
    }
    this.setConnected(false);
    console.log("Disconnected");
  }

  sendName() {
    let data = JSON.stringify({
      'name' : this.name
    })
    
    this.ws.send("/app/hello", {}, data);
  }

  showGreeting(message: any) {
    this.showConversation = true;
    this.greetings = [];
    this.greetings.push(message)
  }

  setConnected(connected: any) {
    this.disabled = connected;
    this.showConversation = connected;
    this.greetings = [];
  }
}



