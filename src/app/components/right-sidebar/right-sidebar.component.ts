import { Component } from '@angular/core';
import {RemaindersComponentComponent} from "../remainders-component/remainders-component.component";
import {EventsComponentComponent} from "../events-component/events-component.component";

@Component({
  selector: 'app-right-sidebar',
  standalone: true,
  imports: [RemaindersComponentComponent, EventsComponentComponent],
  templateUrl: './right-sidebar.component.html',
  styleUrl: './right-sidebar.component.css',
})
export class RightSidebarComponent {}
