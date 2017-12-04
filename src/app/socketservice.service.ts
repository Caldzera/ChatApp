import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import { Socket } from 'ng-socket-io';

@Injectable()
export class SocketserviceService {

  constructor(private socket: Socket) {}

    getMsg() {
        return this.socket
            .fromEvent<any>("msg")
            .map(data => data.msg);
    }

    sendMsg(msg: string) {
        this.socket
            .emit("msg", msg);
    }
}

