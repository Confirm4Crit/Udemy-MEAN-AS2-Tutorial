import {Message} from './message.model';
import {Component} from '@angular/core';

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
export class MessageListComponent {

    messages: Message[] = [new Message('Some message', 'Miles'),
        new Message('Some message2', 'Miles'),
        new Message('Some message3', 'Miles')];

}
