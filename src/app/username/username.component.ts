import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
    @Input() chatUsername: string;
    @Output() submitUsername: EventEmitter<string> = new EventEmitter();

      public addUsername(message: string): void {

        this.submitUsername.emit(message);
        this.chatUsername = '';
      }

  constructor() { }

  ngOnInit() {
  }

}
