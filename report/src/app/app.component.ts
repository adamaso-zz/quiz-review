import { Component } from '@angular/core';
import { IHiggsNavigation, IHiggsNavigationSettings } from './app.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  quizScore = '70%';
  quizTitle = 'My Practice Quiz';
  quizTopics = 'PHYS, CHEM';

  myPracticeQuiz = [
    {
      id: 1,
      isCorrect: true,
      isBookmarked: false,
      question: 'Which of the following statements, if true, would most undermine the author’s characterization of Smith?',
      topic: 'PHYS',
      difficulty: 'Easy',
      timeSpent: '20 Sec'
    },
    {
      id: 2,
      isCorrect: false,
      isBookmarked: false,
      question: 'According to the author, Smith’s most important contribution to economics was',
      topic: 'CHEM',
      difficulty: 'Easy',
      timeSpent: '90 Sec'
    },
    {
      id: 3,
      isCorrect: true,
      isBookmarked: false,
      question: 'The most widely-used differential stain for bacteria is:',
      topic: 'PHYS',
      difficulty: 'Easy',
      timeSpent: '20 Sec'
    },
    {
      id: 4,
      isCorrect: true,
      isBookmarked: false,
      question: 'All of the following are true statements about the brain EXCEPT:',
      topic: 'PHYS',
      difficulty: 'Easy',
      timeSpent: '20 Sec'
    },
    {
      id: 5,
      isCorrect: false,
      isBookmarked: true,
      question: 'On the subject of the number of hospital beds, the author:',
      topic: 'PHYS',
      difficulty: 'Hard',
      timeSpent: '60 Sec'
    }
    ];
}
