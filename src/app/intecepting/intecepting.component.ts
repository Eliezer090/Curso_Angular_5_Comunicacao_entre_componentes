import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intecepting',
  templateUrl: './intecepting.component.html',
  styleUrls: ['./intecepting.component.css']
})
export class InteceptingComponent implements OnInit {
  name="";
  constructor() { }

  ngOnInit(): void {
  }

}
