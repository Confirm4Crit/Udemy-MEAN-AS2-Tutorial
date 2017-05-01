import {MessageService} from './message.service';
import {Message} from './message.model';
import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-message-list',
    template: `
        <div className="col-md-8 col-md-offset-2"></div>

        <app-message [message]="message"
                     (editClicked)="message.content = $event"
                     *ngFor="let message of messages">
        </app-message>

    `
})
export class MessageListComponent implements OnInit {

    //Hardcoded
    messages: Message[];

    constructor(private messageService: MessageService) {
    }

    ngOnInit() {
        this.messages = this.messageService.getMessages();

    }


}
