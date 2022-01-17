import React, { useState } from 'react';
import logo from './Java Logo.png';



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
  
  const NO_OF_HIGH_SCORES = 10;
const HIGH_SCORES = 'highScores';
function saveHighScore(score, highScores) {
  const name = prompt('You got a highscore! Enter name:');
  const newScore = { score, name };
  
  
  highScores.push(newScore);

  
  highScores.sort((a, b) => b.score - a.score);
  
 
  highScores.splice(NO_OF_HIGH_SCORES);
  
  
  localStorage.setItem(HIGH_SCORES, JSON.stringify(highScores));
  
};

function checkHighScore(score) {
  const highScores = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];
  
  if(score>0){
 
    saveHighScore(score, highScores); 
     
  }
  
}
function disp()
{
  const highScores = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];
 
      const highscorelist=highScores.map((score) => 
  `${score.score} : ${score.name}`)
  if(highscorelist[0]===undefined)
  alert("Sorry no score exists!!")
  else
  alert("The highest score for this session is :\n"+highscorelist[0]);
  
}


  const [currentQuestion, setCurrentQuestion] = useState(-1)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(-1)
  const handleprev = (isCorrect) => {
    if(isCorrect===true)
    {
      
      if(currentQuestion>=1)
      {
        if(score<=0){
          alert("You lost Try Again!!");
          setShowScore(true);
        }
        else{
        alert("One Mark has been deducted");
        const prev=currentQuestion -1;
        setCurrentQuestion(prev);
        setScore(score-1);
        }
      }
      else
      {
        alert("Sorry Not Possible!!");
      }
    }
  }
  const handlenext = (isCorrect) => {
    if(isCorrect===true)
    {
      if(currentQuestion===questions.length-1)
      {
        alert("It's the last question!");
        setShowScore(true);  
      }
      else{
        const next=currentQuestion+1;
        setCurrentQuestion(next);
      }
    }
  }
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQs = currentQuestion + 1;
    if (nextQs < questions.length) {
      setCurrentQuestion(nextQs);
    }
    else {
      checkHighScore(score);
      setShowScore(true)
    }
  }
  

  return (
    <>
      <div className='logocontainer'>
      
        <img src={logo} alt="Java Logo" id="logo" width="90" height="90"/>
        
      </div>
     
      <div id="headings">
      <h1 className='mainheading'>Welcome</h1>
      </div>
      <div id="headings2">
      <h1 className='mainheading2'>QuizMate</h1>
      </div>
      
      
      <div className="app">
      {}
      
        {showScore ? (
          
            
            <div className='score-section'>
            You scored {score} out of the {questions.length}
            <button id="returnbutton"><a href="https://blissful-neumann-e45a1a.netlify.app/">Play Again</a></button>
            <button id="returnbutton" onClick={()=> disp()}>High Score</button>
          </div>          
          
        )
          :
          (
           
            <>
              {(currentQuestion===-1) ?
               (
                 <div>
                     <h3>
                       The Instructions are as follows:<br></br>
                     </h3>
                     <h4>
                       * The quiz contains questions related to <i><u>Java</u></i> only.
                     </h4>
                     <h4>
                       * The quiz contains 10 questions of 1 mark each.
                     </h4>
                     <h4>
                       * You will be awarded 1 mark for each correct answer.
                     </h4>
                     <h4>
                       * No negative marks for wrong answers.
                     </h4>
                     <h4>
                       * The previous button will cost you 1 mark everytime.
                     </h4>
                    <div class="proceedbutton">
                     <button id="proceed"  onClick={()=>handleAnswerButtonClick(true)}><span>Proceed</span></button>
                    </div>
                 </div>)
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
                <div>
                  <button class="prevbutton" onClick={() => handleprev(true)}>Previous</button>
                </div>
                <div>
                <br>
                  
                </br>
                  <button class="prevbutton" onClick={() => handlenext(true)}>Next</button>
                </div>
                
              </div>
              <div className='answer-section'>
                {
                  questions[currentQuestion].answerOptions.map((answerOptions) => (
                    <button className='button' onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}><span>{answerOptions.answerText}</span></button>
                  ))
                }
              </div>
              </>)}
            </>
          )}
      </div>
    </>
  );
}

export default App;
