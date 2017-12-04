import { Component } from '@angular/core';
import { SocketserviceService } from './socketservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SocketserviceService]
})
export class AppComponent {
  public title = 'hsg chat-app';
  public messageHistory: string = '';
  formattedmsg: string = '';


constructor(private chatService : SocketserviceService) { } 


ngOnInit() {

        this.chatService                                                        // Hier lauschen wir auf Nachrichten des Servers
        .getMsg()
        .subscribe(msg => {
        this.messageHistory += msg;
        });

 }

  public onSubmitMessage($event): void {

    this.formattedmsg = $event + '\n';
    this.messageHistory += this.formattedmsg;
    this.chatService.sendMsg(this.formattedmsg);  
  }
}
