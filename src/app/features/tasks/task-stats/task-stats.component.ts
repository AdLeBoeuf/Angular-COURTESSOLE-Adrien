import { Component, inject } from '@angular/core';
import { TaskService } from '../../../core/services/task.service';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-stats',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (stats$ | async; as stats) {
      <div class="stats">
        <h3>Statistiques</h3>
        <p>Total : {{ stats.total }}</p>
        <p>Terminées : {{ stats.completed }}</p>
        <p>En cours : {{ stats.active }}</p>
        <p>Progression : {{ stats.percentage }}%</p>
      </div>
    }
  `,
  styles: [`
    .stats {
      background: #e8f5e9;
      padding: 20px;
      border-radius: 8px;
      border-left: 4px solid #4caf50;
      margin-bottom: 20px;
    }
    h3 {
      margin-top: 0;
      color: #2e7d32;
    }
    p {
      margin: 8px 0;
      color: #1b5e20;
    }
  `]
})
export class TaskStatsComponent {
  private taskService = inject(TaskService);

  stats$ = this.taskService.tasks$.pipe(
    map(tasks => {
      const total = tasks.length;
      const completed = tasks.filter(t => t.completed).length;
      const active = total - completed;
      const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

      return { total, completed, active, percentage };
    })
  );
}
