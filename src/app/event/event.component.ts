import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {



  valor:number=0;
  title:string="My Title";
  constructor() { }

  ngOnInit(): void {
  }
  incby(event){
    console.log(event)
  this.valor+=event;
}
}
