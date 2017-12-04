import { Injectable } from '@angular/core';

@Injectable()
export class PersonService {

  private _nickname: string;

  constructor() { }

  public getNickname(): string {
    return this._nickname;
  }

  public setNickname(value: string): void {
    this._nickname = value;
  }
}
