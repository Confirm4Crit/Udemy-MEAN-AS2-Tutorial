import { Message } from './message.model';
import { MessageService } from './message.service';

import {Component} from '@angular/core';
@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
    providers: [MessageService]
})

export class MessageInputComponent {
    constructor(private MessageService: MessageService){

    }
    onSave(value: string) {
        const message = new Message(value, 'Miles');
        this.MessageService.addMessage(message);

    }

}