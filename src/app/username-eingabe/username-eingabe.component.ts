import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-eingabe',
  templateUrl: './username-eingabe.component.html',
  styleUrls: ['./username-eingabe.component.css']
})
export class UsernameEingabeComponent implements OnInit {
  @Input() chatMessage: string;
  @Output() submitMessage: EventEmitter<string> = new EventEmitter();

  @Input() chatUsername: string ='';


  constructor() { }

  ngOnInit() {
  }

  public addMessage(message: string, username: string): void{
    this.submitMessage.emit(username + ':\n' + message);
    this.chatMessage = '';

    if (this.chatMessage = '') {
    alert("Bitte Nachricht eingeben")
  }


}
}
