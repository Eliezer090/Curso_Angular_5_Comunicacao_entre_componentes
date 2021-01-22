import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-parent-chield',
  templateUrl: './parent-chield.component.html',
  styleUrls: ['./parent-chield.component.css']
})
export class ParentChieldComponent implements OnInit {
//Desa maneira ele pega do 1 que ele achar e referencia
 // @ViewChild(TimerComponent) 
 //dessa segunfa maneira ele pega do que tem o ID la
 // @ViewChild("stopwatch2")  
  mytimmer: TimerComponent;  
  //Referenciando um elemento html
  @ViewChild("myP")
  //referencia a um elemento interno do html
  myp:ElementRef

  constructor() { }

  ngOnInit(): void {
  }

  start() {
    this.mytimmer.start();
  }
  stop() {
    this.mytimmer.stop();
  }
  clear() {
    this.mytimmer.clear();
  }

  //chamado após carregar todos os elementos e referenciados!
  ngAfterViewInit(){
    console.log(this.myp)
  }
}
