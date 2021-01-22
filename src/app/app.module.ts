import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputBindingComponent } from './input-binding/input-binding.component';
import { ClientComponent } from './input-binding/client/client.component';
import { EventComponent } from './event/event.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ChildItemComponent } from './event/child-item/child-item.component';
import { ClientsComponent } from './clients/clients.component';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ItenClientsComponent } from './clients/iten-clients/iten-clients.component';
import { ParentChieldComponent } from './parent-chield/parent-chield.component';
import { TimerComponent } from './parent-chield/timer/timer.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { OnChangesComponent } from './on-changes/on-changes.component';
import { NamesChangesComponent } from './on-changes/names-changes/names-changes.component';
import { InteceptingComponent } from './intecepting/intecepting.component';
import { NameComponent } from './intecepting/name/name.component';


@NgModule({
  declarations: [
    AppComponent,
    InputBindingComponent,
    ClientComponent,
    EventComponent,
    ChildItemComponent,
    ClientsComponent,
    ItenClientsComponent,
    ParentChieldComponent,
    TimerComponent,
    OnChangesComponent,
    NamesChangesComponent,
    InteceptingComponent,
    NameComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
