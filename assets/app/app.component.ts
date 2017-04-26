import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styles: [` .author{

        display:inline-block;
        font-style:italic;
        font-size: 12px;
        width: 80%;
    }
        .content{
            display:inline-block;
            font-style:right;
            font-size: 12px;
            width: 19%;
        }
    
    `]
})
export class AppComponent {
    message = {
        content: 'A message',
        author: 'Miles'
    };
}