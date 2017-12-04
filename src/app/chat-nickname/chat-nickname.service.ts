import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class ChatNicknameService {
    private nickname: string;

    constructor() { }

    public addNickname = (nickname: string): Observable<string> => {
        this.nickname = nickname;

        return new Observable(observer => {
            observer.next(nickname);
        });
    }

    public getNickname(): string {
        return this.nickname;
    }
}
