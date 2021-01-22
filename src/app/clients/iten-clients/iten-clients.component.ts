import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from '../client.model';

@Component({
  selector: 'app-iten-clients',
  templateUrl: './iten-clients.component.html',
  styleUrls: ['./iten-clients.component.css']
})
export class ItenClientsComponent implements OnInit {

  @Input() client: Client;
  @Output() updateClient = new EventEmitter<Client>();
  @Output() removeClient = new EventEmitter<any>();
  onEdit: boolean= false;

  name: string;
  age: number;

  constructor() { }

  ngOnInit(): void {
  }

  edit(){
    this.onEdit=true;
    this.name = this.client.name;
    this.age = this.client.age;
  }
  remove(){
    this.removeClient.emit()
  }

  save(){
    this.onEdit = false;
    this.updateClient.emit(
      {name:this.name,age:this.age}
    )
  }

}
