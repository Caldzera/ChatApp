import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Person } from '../shared/models/person';
import { PersonService } from '../shared/services/person.service';
import { SocketserviceService } from '../socketservice.service';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css']
})
export class ChatBarComponent implements OnInit {
  @Input() chatMessage: string;
  @Output() submitMessage: EventEmitter<string> = new EventEmitter();

  constructor(private personService: PersonService, private chatService : SocketserviceService) { }

  ngOnInit() {

//	this.chatService                                                        // Hier lauschen wir auf Nachrichten des Servers
//	.getMsg()
//	.subscribe(msg => {
//	this.submitMessage.emit(msg);
  //      });

// }

  }

  public addMessage(message: string): void {
    if (Person.Nickname) {          //Hat der Nickname in Person einen Inhalt
      this.chatMessage = '';        //Setze das Eingabefeld für Nickname wieder leer

      // Erstelle die Message nach dem Muster: (Der Nickname der in Person gespeichert ist) "schrieb am" (Datum und Zeit im deutschen Format)
      // (Zeilenumbruch) (die eingegebene Nachricht)
      message = `${Person.Nickname} schrieb am ${new Date().toLocaleString('de')}: \n${message}`;     
      this.submitMessage.emit(message);       // sendet die fertige Nachricht an den String-sEmitter
    } else {
      alert('Kein Benutzername vorhanden!');    // Wird aufgerufen, wenn kein Nickname eingegeben ist und macht einen alerts
    }
  }
}
