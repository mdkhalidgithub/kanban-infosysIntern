import { Component } from '@angular/core';

interface Task {
  title: string;
  project: string;
  date: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class DashboardComponent {
  newTasks: Task[] = [
    { title: 'Design UI Wireframe', project: 'Project Name', date: '14/03/2025' },
    { title: 'Design Task Filtering UI', project: 'Project Name', date: '14/03/2025' }
  ];

  inProgress: Task[] = [
    { title: 'Implement Task Sorting', project: 'Project Name', date: '14/03/2025' },
    { title: 'Implement Task Deadline Alerts', project: 'Project Name', date: '14/03/2025' },
    { title: 'Developing Task Card', project: 'Project Name', date: '14/03/2025' }
  ];

  completed: Task[] = [
    { title: 'Persistent Theme Setting', project: 'Project Name', date: '24/02/2025' },
    { title: 'LocalStorage Integration', project: 'Project Name', date: '04/03/2025' }
  ];

  delivered: Task[] = [
    { title: 'User Testing & Feedback', project: 'Project Name', date: '17/02/2025' }
  ];
}
