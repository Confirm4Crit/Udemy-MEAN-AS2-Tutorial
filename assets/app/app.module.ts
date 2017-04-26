import { Message } from './messages/message.model';
import { MessageComponent } from './messages/message.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent
    ],
    imports: [BrowserModule,FormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}