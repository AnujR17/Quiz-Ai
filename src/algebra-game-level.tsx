import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, Trophy, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const AlgebraGameLevel = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  
  const questions = [
    {
      id: 1,
      question: "Solve for x: 2x + 5 = 13",
      options: ["x = 4", "x = 6", "x = 8", "x = 3"],
      correct: "x = 4",
      explanation: "Subtract 5 from both sides: 2x = 8, then divide by 2: x = 4"
    },
    {
      id: 2,
      question: "What is the value of y in: y - 7 = 15",
      options: ["y = 8", "y = 22", "y = -8", "y = 21"],
      correct: "y = 22",
      explanation: "Add 7 to both sides: y = 15 + 7 = 22"
    },
    {
      id: 3,
      question: "Simplify: 3(x + 4) - 2x",
      options: ["x + 12", "x + 4", "5x + 4", "x + 10"],
      correct: "x + 12",
      explanation: "3(x + 4) = 3x + 12, then -2x = x + 12"
    },
    {
      id: 4,
      question: "If 5a = 25, what is the value of a?",
      options: ["a = 5", "a = 20", "a = 125", "a = 4"],
      correct: "a = 5",
      explanation: "Divide both sides by 5: a = 25 ÷ 5 = 5"
    },
    {
      id: 5,
      question: "What is the slope of the line y = 2x + 3?",
      options: ["3", "2", "0", "-2"],
      correct: "2",
      explanation: "In the equation y = mx + b, m represents the slope, so slope = 2"
    },
    {
      id: 6,
      question: "Solve: -3x = 12",
      options: ["x = -4", "x = 4", "x = -9", "x = 9"],
      correct: "x = -4",
      explanation: "Divide both sides by -3: x = 12 ÷ (-3) = -4"
    },
    {
      id: 7,
      question: "What is the y-intercept of y = 4x - 7?",
      options: ["4", "-7", "7", "0"],
      correct: "-7",
      explanation: "In the equation y = mx + b, b represents the y-intercept, so y-intercept = -7"
    },
    {
      id: 8,
      question: "Simplify: 2(x - 3) + 4(x + 1)",
      options: ["6x - 2", "6x - 6", "6x + 4", "6x - 4"],
      correct: "6x - 2",
      explanation: "2(x - 3) = 2x - 6, 4(x + 1) = 4x + 4, Then combine: 2x - 6 + 4x + 4 = 6x - 2"
    },
    {
      id: 9,
      question: "Solve for x: x/4 = 3",
      options: ["x = 12", "x = 7", "x = 0.75", "x = -12"],
      correct: "x = 12",
      explanation: "Multiply both sides by 4: x = 3 × 4 = 12"
    },
    {
      id: 10,
      question: "What is the solution to: 5x + 10 = 3x + 20?",
      options: ["x = 5", "x = -5", "x = 10", "x = 15"],
      correct: "x = 5",
      explanation: "Subtract 3x from both sides: 2x + 10 = 20, Subtract 10: 2x = 10, Divide by 2: x = 5"
    }
  ];

  const handleAnswer = (answer) => {
    const correct = answer === questions[currentQuestion].correct;
    setIsCorrect(correct);
    setShowFeedback(true);
    
    if (correct) {
      setScore(score + 100);
    } else {
      setLives(lives - 1);
    }

    setTimeout(() => {
      setShowFeedback(false);
      if (currentQuestion < questions.length - 1 && lives > 0) {
        setCurrentQuestion(currentQuestion + 1);
      }
    }, 2000);
  };

  if (lives === 0) {
    return (
      <GameOver score={score} totalQuestions={questions.length} />
    );
  }

  if (currentQuestion === questions.length - 1 && !showFeedback) {
    return (
      <LevelComplete score={score} totalQuestions={questions.length} />
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-8">
      {/* Game UI Header */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex justify-between items-center bg-white/20 backdrop-blur-lg rounded-lg p-4 text-white">
          <div className="flex items-center space-x-4">
            <div className="flex space-x-1">
              {[...Array(lives)].map((_, i) => (
                <Heart key={i} className="w-6 h-6 fill-red-500 text-red-500" />
              ))}
            </div>
            <div className="text-lg font-bold">Level 1: Algebra</div>
          </div>
          <div className="flex items-center space-x-4">
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            <span className="text-lg font-bold">{score}</span>
          </div>
        </div>
        <Progress value={(currentQuestion / questions.length) * 100} className="mt-4" />
      </div>

      {/* Question Card */}
      <Card className="max-w-4xl mx-auto bg-white/90 backdrop-blur-lg">
        <CardHeader>
          <CardTitle className="text-2xl">
            Question {currentQuestion + 1} of {questions.length}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="text-xl font-medium">
              {questions[currentQuestion].question}
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className={`text-lg p-6 ${
                    showFeedback && option === questions[currentQuestion].correct
                      ? 'bg-green-500 hover:bg-green-600'
                      : showFeedback && option !== questions[currentQuestion].correct
                      ? 'bg-red-500 hover:bg-red-600'
                      : 'bg-blue-500 hover:bg-blue-600'
                  }`}
                >
                  {option}
                </Button>
              ))}
            </div>

            {/* Feedback */}
            {showFeedback && (
              <div className={`p-4 rounded-lg ${
                isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                <div className="flex items-center space-x-2">
                  <AlertCircle className="w-5 h-5" />
                  <span className="font-medium">
                    {isCorrect ? 'Correct!' : 'Incorrect!'}
                  </span>
                </div>
                <p className="mt-2">{questions[currentQuestion].explanation}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const GameOver = ({ score, totalQuestions }) => (
  <div className="min-h-screen w-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-8 flex items-center justify-center">
    <Card className="max-w-md w-full bg-white/90 backdrop-blur-lg text-center">
      <CardHeader>
        <CardTitle className="text-3xl">Game Over</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-6xl font-bold text-red-500">
          <AlertCircle className="w-16 h-16 mx-auto mb-4" />
        </div>
        <div className="text-xl">
          Final Score: {score} / {totalQuestions * 100}
        </div>
        <Button className="w-full" onClick={() => window.location.reload()}>
          Try Again
        </Button>
      </CardContent>
    </Card>
  </div>
);

const LevelComplete = ({ score, totalQuestions }) => (
  <div className="min-h-screen w-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-8 flex items-center justify-center">
    <Card className="max-w-md w-full bg-white/90 backdrop-blur-lg text-center">
      <CardHeader>
        <CardTitle className="text-3xl">Level Complete!</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-6xl font-bold text-yellow-500">
          <Trophy className="w-16 h-16 mx-auto mb-4" />
        </div>
        <div className="text-xl">
          Final Score: {score} / {totalQuestions * 100}
        </div>
        <Button className="w-full" onClick={() => window.location.reload()}>
          Play Next Level
        </Button>
      </CardContent>
    </Card>
  </div>
);

export default AlgebraGameLevel;
