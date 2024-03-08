import { Component } from '@angular/core';
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {CourseComponent} from "../../components/course/course.component";
import {ReadingComponent} from "../../components/reading/reading.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent, CourseComponent, ReadingComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  name = 'user';
}
