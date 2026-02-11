import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { NotificationService } from './notification.service';

export interface TaskItem {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private notificationService = inject(NotificationService);
  private nextId = 4;

  private tasksSubject = new BehaviorSubject<TaskItem[]>([
    { id: 1, title: 'Faire mes courses ce soir', completed: false },
    { id: 2, title: 'Relire le module RxJS', completed: false },
    { id: 3, title: 'Faire séquence 4', completed: false }
  ]);

  tasks$ = this.tasksSubject.asObservable().pipe(
    tap(tasks => console.log('Nombre de tâches:', tasks.length))
  );

  addTask(title: string): void {
    const currentTasks = this.tasksSubject.value;
    const newTask: TaskItem = {
      id: this.nextId++,
      title,
      completed: false
    };
    const updatedTasks = [...currentTasks, newTask];
    this.tasksSubject.next(updatedTasks);
    
    this.notificationService.show(`Tâche "${title}" ajoutée !`, 'success');
  }

  deleteTask(id: number): void {
    const currentTasks = this.tasksSubject.value;
    const task = currentTasks.find(t => t.id === id);
    const updatedTasks = currentTasks.filter(task => task.id !== id);
    this.tasksSubject.next(updatedTasks);
    
    if (task) {
      this.notificationService.show(`Tâche "${task.title}" supprimée`, 'info');
    }
  }

  toggleTask(id: number): void {
    const currentTasks = this.tasksSubject.value;
    const updatedTasks = currentTasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    this.tasksSubject.next(updatedTasks);
  }

  updateTask(id: number, newTitle: string): void {
    const currentTasks = this.tasksSubject.value;
    const updatedTasks = currentTasks.map(task =>
      task.id === id ? { ...task, title: newTitle } : task
    );
    this.tasksSubject.next(updatedTasks);
  }
}
