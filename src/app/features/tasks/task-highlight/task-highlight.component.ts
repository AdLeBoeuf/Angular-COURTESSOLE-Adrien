import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-highlight',
  standalone: true,
  imports: [],
  template: `
    <div class="highlight-box">
      <h3>Tâche mise en avant</h3>
      <p class="task-title">{{ task?.title }}</p>
      <button (click)="close()">Fermer</button>
    </div>
  `,
  styles: [`
    .highlight-box {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 30px;
      border-radius: 12px;
      margin: 20px 0;
      box-shadow: 0 8px 16px rgba(0,0,0,0.2);
      animation: slideDown 0.3s ease-out;
    }
    
    h3 {
      margin: 0 0 15px 0;
      font-size: 1.5em;
    }
    
    .task-title {
      font-size: 1.2em;
      margin: 15px 0;
      padding: 15px;
      background: rgba(255,255,255,0.2);
      border-radius: 8px;
    }
    
    button {
      padding: 10px 20px;
      background: white;
      color: #667eea;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-weight: bold;
      transition: transform 0.2s;
    }
    
    button:hover {
      transform: scale(1.05);
    }
    
    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class TaskHighlightComponent {
  @Input() task: any;
  @Output() onClose = new EventEmitter<void>();

  close() {
    this.onClose.emit();
  }
}
