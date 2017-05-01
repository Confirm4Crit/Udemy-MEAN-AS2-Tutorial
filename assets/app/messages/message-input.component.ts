import { Message } from './message.model';
import { MessageService } from './message.service';

import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
})

export class MessageInputComponent {
    constructor(private MessageService: MessageService){

    }
    onSubmit(form: NgForm) {
        //console.log(form);
        const message = new Message(form.value.content, 'Miles');
        this.MessageService.addMessage(message);
        form.resetForm();

    }

}