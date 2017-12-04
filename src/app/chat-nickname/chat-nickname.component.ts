import { Component, OnInit } from '@angular/core';

import { Person } from '../shared/models/person';

@Component({
  selector: 'app-chat-nickname',
  templateUrl: './chat-nickname.component.html',
  styleUrls: ['./chat-nickname.component.css']
})
export class ChatNicknameComponent implements OnInit {
  public nickname: string;
  public message: string;

  constructor() { }       

  ngOnInit() {
  }

  public createNickname(): void {
    Person.Nickname = this.nickname;              // Weist der Person den eingegeben Nicknamen zu
    console.log('nickname created');            // Gibt eine Rückmeldung in der Konsole aus

    this.message = `Benutzername: > ${this.nickname} < wurde erstellt!`;    // Gibt unter dem Eingabefeld eine Rückmeldung aus
    this.nickname = '';               // Leert das Eingabefeld wieder
  }
}
