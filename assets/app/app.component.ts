import {Message} from './messages/message.model';
import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    messages: Message[] = [new Message('Some message', 'Miles'),
        new Message('Some message2', 'Miles'),
        new Message('Some message3', 'Miles')];
}