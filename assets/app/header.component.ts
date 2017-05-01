import {Component} from "@angular/core";
@Component({
    selector: 'app-header',
    template:`<header class="row"></header>
        <nav class="col-md-8 col-md-offset-2"></nav>
        <ul class="nav nav-pills">
            <li><a >Messanger</a></li>
            <li><a >Authentication</a></li>
        </ul>
    `

})
export class HeaderComponent{

}