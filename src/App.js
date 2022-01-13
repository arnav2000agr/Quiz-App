import React, { useState } from 'react';

function App() {

  const questions = [
    {
      questionText: 'Which of the following is not a Java features?',
      answerOptions: [
        { answerText: 'Dynamic', isCorrect: false },
        { answerText: 'Portable', isCorrect: false },
        { answerText: 'Use of Pointers', isCorrect: true },
        { answerText: 'Object Oriented', isCorrect: false },
      ],
    },
    {
      questionText: 'Which component is used to compile, debug and execute the java programs?',
      answerOptions: [
        { answerText: 'JRE', isCorrect: false },
        { answerText: 'JDK', isCorrect: true },
        { answerText: 'JIT', isCorrect: false },
        { answerText: 'JVM', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the extension of java code files?',
      answerOptions: [
        { answerText: '.js', isCorrect: false },
        { answerText: '.java', isCorrect: true },
        { answerText: '.txt', isCorrect: false },
        { answerText: '.class', isCorrect: false },
      ],
    },
    {
      questionText: 'What is Truncation in Java?',
      answerOptions: [
        { answerText: 'Floating-point value assigned to a Floating type', isCorrect: false },
        { answerText: 'Integer value assigned to Integer type', isCorrect: false },
        { answerText: 'Integer value assigned to floating type', isCorrect: false },
        { answerText: 'Floating-point value assigned to an integer type', isCorrect: true },
      ],
    },
    {
      questionText: ' What is the extension of compiled java classes?',
      answerOptions: [
        { answerText: '.js', isCorrect: false },
        { answerText: '.java', isCorrect: false },
        { answerText: '.txt', isCorrect: false },
        { answerText: '.class', isCorrect: true },
      ],
    },
    {
      questionText: 'Which of these keywords is used to define interfaces in Java?',
      answerOptions: [
        { answerText: 'interface', isCorrect: true },
        { answerText: 'Interface', isCorrect: false },
        { answerText: 'intf', isCorrect: false },
        { answerText: 'Intf', isCorrect: false },
      ],
    },
    {
      questionText: 'Which of the following is a superclass of every class in Java?',
      answerOptions: [
        { answerText: ' Abstract class', isCorrect: false },
        { answerText: 'ArrayList', isCorrect: false },
        { answerText: 'Object class', isCorrect: true },
        { answerText: 'String', isCorrect: false },
      ],
    },
    {
      questionText: 'Which of these packages contains the exception Stack Overflow in Java?',
      answerOptions: [
        { answerText: 'java.io', isCorrect: false },
        { answerText: 'java.lang', isCorrect: true },
        { answerText: 'java.system', isCorrect: false },
        { answerText: 'java.util', isCorrect: false },
      ],
    },
    {
      questionText: 'Which of these keywords are used for the block to be examined for exceptions?',
      answerOptions: [
        { answerText: 'check', isCorrect: false },
        { answerText: 'throw', isCorrect: false },
        { answerText: 'catch', isCorrect: false },
        { answerText: 'try', isCorrect: true },
      ],
    },
    {
      questionText: 'Which one of the following is not an access modifier?',
      answerOptions: [
        { answerText: 'void', isCorrect: true},
        { answerText: 'public', isCorrect: false },
        { answerText: 'protected', isCorrect: false },
        { answerText: 'private', isCorrect: false },
      ],
    }
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuetions = currentQuestion + 1;
    if (nextQuetions < questions.length) {
      setCurrentQuestion(nextQuetions);
    }
    else {
      setShowScore(true)
    }
  }

  return (
    <>
      <div id="headings">
      <h1 className='mainheading'>Welcome</h1>
      </div>
      <div id="headings2">
      <h1 className='mainheading2'>QuizMate</h1>
      </div>
      <h1 className='header'>Java Quiz</h1>
      <div className="app">
      
        {showScore ? (
          <div className='score-section'>
            You scored {score} out of the {questions.length}
            <button id="returnbutton"><a href="https://blissful-neumann-e45a1a.netlify.app/">Play Again</a></button>
          </div>
          
        )
          :
          (
           
            <>
              <div className='question-section'>
                <div className='question-count'>
                  <span>Question {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className='question-text'>
                  {questions[currentQuestion].questionText}
                </div>
              </div>
              <div className='answer-section'>
                {
                  questions[currentQuestion].answerOptions.map((answerOptions) => (
                    <button className='button' onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}><span>{answerOptions.answerText}</span></button>
                  ))
                }
              </div>
            </>
          )}
      </div>
    </>
  );
}

export default App;
