import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { QuestionNumbersComponent } from './question-numbers/question-numbers.component';
import { QuestionAnswerComponent } from './question-answer/question-answer.component';
import { ActionButtonsComponent } from './action-buttons/action-buttons.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent,
    QuestionNumbersComponent,
    QuestionAnswerComponent,
    ActionButtonsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Task 2';
}
