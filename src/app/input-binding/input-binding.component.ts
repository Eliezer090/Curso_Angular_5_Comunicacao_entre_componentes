import { Component, Input, OnInit } from '@angular/core';
import { client } from './client.model';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {
  @Input()name: string;
  @Input('othername')lastname: string;
  @Input()age: number;

  clients: client[];

  constructor() { 
    this.clients=[
      {id:1, name:"bob",age:30},
      {id:2, name:"ana",age:20},
      {id:3, name:"mar",age:10},
      {id:4, name:"algu",age:5},
    ]

  }

  ngOnInit(): void {
  }

}
