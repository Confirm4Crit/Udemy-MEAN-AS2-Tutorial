import {Message} from "./message.model";
import {Http, Response,Headers} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
//Needed to add the service, needs metadata
@Injectable()
export class MessageService {
    private messages: Message[] = [];

    constructor(private http: Http){}

    addMessage(message: Message) {
        this.messages.push(message);
        //HTTP service
        const body = JSON.stringify((message));
        const headers = new Headers({'Content-Type': 'application/json'});
        //Need to convert to JSON before passing
        //This line does not send the request yet. Set up for listener.
        return this.http.post('http://localhost:3000/messages',body,
            {headers: headers})
            .map((response: Response) => response.json());
    }

    getMessages() {
        return this.messages;
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}