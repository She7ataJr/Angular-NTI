import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
onSale:boolean= true
mainColor : string="background-color:grey"
secondColor:string="background-color:tomato"
name : string = ''
}
