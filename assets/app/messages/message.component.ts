import { Message } from './message.model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-message',
    templateUrl: './Message.component.html',
    styles: [` .author{

        display:inline-block;
        font-style:italic;
        font-size: 12px;
        width: 80%;
    }
        .config{
            display:inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    
    `]

})

export class MessageComponent{
    @Input() message: Message ; 

}