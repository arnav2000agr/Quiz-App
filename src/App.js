import React, { useState } from 'react';

function App() {

  const questions = [
    {
      questionText: ' What is the extension of java code  ?',
      answerOptions: [
        { answerText: 'Dynamic', isCorrect: false },
        { answerText: 'Architecture', isCorrect: false },
        { answerText: 'Use of Pointers', isCorrect: true },
        { answerText: 'Object Oriented', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is CEO of Tata?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Ratan Tata', isCorrect: true },
        { answerText: 'Mukesh Ambani', isCorrect: false },
        { answerText: 'Gautam Adani', isCorrect: false },
      ],
    },
    {
      questionText: 'who is richest person in the world?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: true },
        { answerText: 'Mukesh Ambani', isCorrect: false },
        { answerText: 'Warren Buffett', isCorrect: false },
      ],
    },
    {
      questionText: 'how many countries in the world?',
      answerOptions: [
        { answerText: '120', isCorrect: false },
        { answerText: '183', isCorrect: false },
        { answerText: '170', isCorrect: false },
        { answerText: '195', isCorrect: true },
      ],
    },
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
      <h1 className='header'>Quiz</h1>
      <div className="app">
      
        {showScore ? (
          <div className='score-section'>
            You scored {score} out of the {questions.length}
            <button id="returnbutton"><a href="http://localhost:3000/">Play Again</a></button>
          </div>
          
        )
          :
          (
           
            <>
              <div className='question-section'>
                <div className='question-count'>
                  <span>Question {currentQuestion + 1}</span>{questions.length}
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
