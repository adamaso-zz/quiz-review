import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myPracticeQuiz = [
    {
      id: 1,
      isCorrect: true,
      isBookmarked: false,
      question: 'Question: Which of the following statements, if true, would most undermine the author’s characterization of Smith?',
      topic: 'PHYS',
      difficulty: 'Easy',
      timeSpent: '20 Sec'
    },
    {
      id: 2,
      isCorrect: false,
      isBookmarked: false,
      question: 'Question: According to the author, Smith’s most important contribution to economics was',
      topic: 'CHEM',
      difficulty: 'Easy',
      timeSpent: '90 Sec'
    },
    {
      id: 3,
      isCorrect: true,
      isBookmarked: false,
      question: 'Question: The most widely-used differential stain for bacteria is:',
      topic: 'PHYS',
      difficulty: 'Easy',
      timeSpent: '20 Sec'
    },
    {
      id: 4,
      isCorrect: true,
      isBookmarked: false,
      question: 'Question: All of the following are true statements about the brain EXCEPT:',
      topic: 'PHYS',
      difficulty: 'Easy',
      timeSpent: '20 Sec'
    },
    {
      id: 5,
      isCorrect: false,
      isBookmarked: true,
      question: 'Question: On the subject of the number of hospital beds, the author:',
      topic: 'PHYS',
      difficulty: 'Hard',
      timeSpent: '60 Sec'
    },
    {
      id: 6,
      isCorrect: true,
      isBookmarked: false,
      question: 'Question: In the Van der Waals equation, the purpose of the n2 is:',
      topic: 'CHEM',
      difficulty: 'Hard',
      timeSpent: '60 Sec'
    },
    {
      id: 7,
      isCorrect: true,
      isBookmarked: false,
      question: 'Question: What is the mechanical advantage of the pulley sytem?',
      topic: 'PHYS',
      difficulty: 'Easy',
      timeSpent: '60 Sec'
    },
    {
      id: 8,
      isCorrect: false,
      isBookmarked: true,
      question: 'Question: If the weight moves down 1 cm, how far does the patient’s leg move?',
      topic: 'CHEM',
      difficulty: 'Hard',
      timeSpent: '70 Sec'
    },
    {
      id: 9,
      isCorrect: true,
      isBookmarked: false,
      question: 'Question: Using the VSEPR theory, the shape of PC is:',
      topic: 'CHEM',
      difficulty: 'Easy',
      timeSpent: '60 Sec'
    },
    {
      id: 10,
      isCorrect: true,
      isBookmarked: false,
      question: 'Question: The rate law for the reaction is',
      topic: 'PHYS',
      difficulty: 'Easy',
      timeSpent: '10 Sec'
    }
    ];
}
