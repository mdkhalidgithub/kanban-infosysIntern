import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
  id: number;
  title: string;
  project: string;
  date: string;
  status: 'new' | 'inProgress' | 'completed' | 'delivered';
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class DashboardComponent { 
  tasks: Task[] = [
    { id: 1, title: 'Design UI Wireframe', project: 'Project Name', date: '14/03/2026', status: 'new' },
    { id: 2, title: 'Developing Task Card', project: 'Project Name', date: '14/03/2026', status: 'inProgress' },
    { id: 3, title: 'Persistent Theme Setting', project: 'Project Name', date: '24/02/2026', status: 'completed' },
    { id: 4, title: 'User Testing & Feedback', project: 'Project Name', date: '17/02/2026', status: 'delivered' }
  ];

  showForm = false;
  editingTask: Task | null = null;
  newTask = { title: '', project: '', date: '', status: 'new' as 'new' | 'inProgress' | 'completed' | 'delivered' };
  showDeletePopup = false;

  get newTasks() { return this.tasks.filter(t => t.status === 'new'); }
  get inProgress() { return this.tasks.filter(t => t.status === 'inProgress'); }
  get completed() { return this.tasks.filter(t => t.status === 'completed'); }
  get delivered() { return this.tasks.filter(t => t.status === 'delivered'); }

  openForm() {
    this.showForm = true;
    this.editingTask = null;
    this.newTask = { title: '', project: '', date: '', status: 'new' };
  }

  closeForm() {
    this.showForm = false;
    this.editingTask = null;
  }

  addTask() {
    if (this.newTask.title && this.newTask.project && this.newTask.date) {
      const task: Task = {
        id: Date.now(),
        ...this.newTask
      };
      this.tasks.push(task);
      this.closeForm();
    }
  }

  editTask(task: Task) {
    this.showForm = true;
    this.editingTask = task;
    this.newTask = { title: task.title, project: task.project, date: task.date, status: task.status };
  }

  updateTask() {
    if (this.editingTask && this.newTask.title && this.newTask.project && this.newTask.date) {
      this.editingTask.title = this.newTask.title;
      this.editingTask.project = this.newTask.project;
      this.editingTask.date = this.newTask.date;
      this.editingTask.status = this.newTask.status;
      this.closeForm();
    }
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.showDeletePopup = true;
    setTimeout(() => this.showDeletePopup = false, 2000);
  }
}
