import { Component, inject, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../../core/services/task.service';
import { TaskHighlightComponent } from '../task-highlight/task-highlight.component';
import { TaskEditComponent } from '../task-edit/task-edit.component';
import { TaskStatsComponent } from '../task-stats/task-stats.component';

@Component({
  selector: 'app-tasks-page',
  standalone: true,
  imports: [CommonModule, TaskStatsComponent],
  templateUrl: './tasks-page.component.html',
  styleUrl: './tasks-page.component.css'
})
export class TasksPageComponent {
  private taskService = inject(TaskService);
  
  tasks$ = this.taskService.tasks$;
  tasks: any[] = [];

  @ViewChild('highlightContainer', { read: ViewContainerRef })
  highlightContainer!: ViewContainerRef;

  @ViewChild('editContainer', { read: ViewContainerRef })
  editContainer!: ViewContainerRef;

  ngOnInit() {
    this.tasks$.subscribe(tasks => this.tasks = tasks);
  }

  addTask(title: string): void {
    if (title.trim()) {
      this.taskService.addTask(title);
    }
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
  }

  toggleTask(id: number): void {
    this.taskService.toggleTask(id);
  }

  highlight(task: any): void {
    this.highlightContainer.clear();
    const ref = this.highlightContainer.createComponent(TaskHighlightComponent);
    ref.instance.task = task;
    
    ref.instance.onClose.subscribe(() => {
      this.highlightContainer.clear();
    });
  }

  editTask(task: any): void {
    this.editContainer.clear();
    const ref = this.editContainer.createComponent(TaskEditComponent);
    ref.instance.title = task.title;
    ref.instance.taskId = task.id;
    
    ref.instance.onSave.subscribe((data) => {
      this.taskService.updateTask(data.id, data.title);
      this.editContainer.clear();
    });
    
    ref.instance.onCancel.subscribe(() => {
      this.editContainer.clear();
    });
  }
}
