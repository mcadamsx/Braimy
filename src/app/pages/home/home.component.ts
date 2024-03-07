import { Component } from '@angular/core';
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {DashboardComponent} from "../dashboard/dashboard.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent, DashboardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
