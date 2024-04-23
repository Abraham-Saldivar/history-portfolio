import { Box, Button, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

function QuizFormTwo() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      questionText:
        "Which war, fought from 1754 to 1763, is often considered the first global conflict, involving major European powers and their colonies?",
      answerOptions: [
        { answerText: "American Revolutionary War", isCorrect: false },
        { answerText: "Seven Years' War", isCorrect: true },
        { answerText: "French Revolution", isCorrect: false },
        { answerText: "Napoleonic Wars", isCorrect: false },
      ],
    },
    {
      questionText:
        "Who was the monarch of England during the American Revolutionary War?",
      answerOptions: [
        { answerText: "King George I", isCorrect: false },
        { answerText: "King George II", isCorrect: false },
        { answerText: "King George III", isCorrect: true },
        { answerText: "King George IV", isCorrect: false },
      ],
    },
    {
      questionText:
        "What document, drafted in 1776, declared the thirteen American colonies independent from British rule?",
      answerOptions: [
        { answerText: "The Magna Carta", isCorrect: false },
        { answerText: "The Declaration of Independence", isCorrect: true },
        { answerText: "The Articles of Confederation", isCorrect: false },
        { answerText: "The Bill of Rights", isCorrect: false },
      ],
    },
    {
      questionText:
        "Who wrote the influential pamphlet 'Common Sense' that advocated for American independence from Britain?",
      answerOptions: [
        { answerText: "Thomas Jefferson", isCorrect: false },
        { answerText: "Benjamin Franklin", isCorrect: false },
        { answerText: "John Adams", isCorrect: false },
        { answerText: "Thomas Paine", isCorrect: true },
      ],
    },
    {
      questionText:
        "Which Enlightenment philosopher's ideas influenced the American and French Revolutions with his advocacy for democracy and natural rights?",
      answerOptions: [
        { answerText: "John Locke", isCorrect: true },
        { answerText: "Jean-Jacques Rousseau", isCorrect: false },
        { answerText: "Voltaire", isCorrect: false },
        { answerText: "Montesquieu", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which battle, fought in 1777, is considered a turning point in the American Revolutionary War, securing crucial French support for the American cause?",
      answerOptions: [
        { answerText: "Battle of Yorktown", isCorrect: false },
        { answerText: "Battle of Saratoga", isCorrect: true },
        { answerText: "Battle of Bunker Hill", isCorrect: false },
        { answerText: "Battle of Lexington and Concord", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which treaty, signed in 1783, officially ended the American Revolutionary War and recognized the independence of the United States from Great Britain?",
      answerOptions: [
        { answerText: "Treaty of Paris", isCorrect: true },
        { answerText: "Treaty of Versailles", isCorrect: false },
        { answerText: "Treaty of Utrecht", isCorrect: false },
        { answerText: "Treaty of Westphalia", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which French monarch famously said 'Let them eat cake' when informed that the peasants had no bread, contributing to public outrage and dissatisfaction that led to the French Revolution?",
      answerOptions: [
        { answerText: "King Louis XIV", isCorrect: false },
        { answerText: "King Louis XV", isCorrect: false },
        { answerText: "King Louis XVI", isCorrect: true },
        { answerText: "King Louis XVII", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which American founding father is credited with drafting the United States Constitution during the Constitutional Convention of 1787?",
      answerOptions: [
        { answerText: "Thomas Jefferson", isCorrect: false },
        { answerText: "James Madison", isCorrect: true },
        { answerText: "Alexander Hamilton", isCorrect: false },
        { answerText: "John Adams", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which major event in French history occurred on July 14, 1789, symbolizing the beginning of the French Revolution?",
      answerOptions: [
        { answerText: "Storming of the Bastille", isCorrect: true },
        { answerText: "Execution of Louis XVI", isCorrect: false },
        { answerText: "Reign of Terror", isCorrect: false },
        {
          answerText: "Declaration of the Rights of Man and of the Citizen",
          isCorrect: false,
        },
      ],
    },
  ];

  const handleNextQuestion = (isCorrect) => {
    if (isCorrect === true) {
      setScore((prevScore) => prevScore + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleReset = () => {
    setShowScore(false);
    setCurrentQuestion(0);
    setScore(0);
  };

  useEffect(() => {
    if (showScore) {
      if (score === questions.length) {
        toast.success("Wow nice job getting that 💯! Onto the next section!", {
          duration: 4000,
          position: "bottom-left",
        });
      } else {
        toast.error(
          "Nice try! Why don't you go over the material again and aim for a 💯! 🤓 ",
          {
            duration: 4000,
            position: "bottom-left",
          }
        );
      }
    }
  }, [showScore, score, questions.length]);
  return (
    <>
      {/* <Box paddingLeft={5}> */}
      {/* <Typography sx={{ fontSize: "calc(10px + 2vmin)" }}>
        {" "}
        1700s Quiz
      </Typography> */}
      {/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
      <div className="quiz-section-parent">
        {showScore ? (
          <Box
            sx={{
              maxHeight: "75vh",
              width: "100%",
              backgroundColor: "primary.main",
            }}
            display="flex"
            flexDirection="row"
            justifyContent="center"
          >
            <Box display="flex" flexDirection="column" justifyContent="center">
              <Typography
                paddingLeft={6}
                sx={{
                  fontSize: "calc(50px + 2vmin)",
                  fontWeight: 600,
                  color: "#000000",
                  textAlign: "center",
                }}
              >
                {(score / questions.length) * 100} %
              </Typography>
              <Typography
                padding={2}
                sx={{
                  fontSize: "calc(15px + 2vmin)",
                  fontWeight: 600,
                  color: "#000000",
                }}
              >
                You scored {score} out of {questions.length}
              </Typography>

              <Box
                padding={2}
                display="flex"
                flexDirection="row"
                justifyContent="center"
              >
                <Button
                  variant="contained"
                  sx={{ fontSize: "calc(1px + 2vmin)" }}
                  color="secondary"
                  onClick={handleReset}
                >
                  Reset
                </Button>
              </Box>
            </Box>
          </Box>
        ) : (
          <>
            <Box
              sx={{
                width: "100%",
                backgroundColor: "primary.main",
              }}
            >
              <Box paddingLeft={5}>
                <Typography
                  sx={{
                    fontSize: "calc(15px + 2vmin)",
                    fontWeight: 600,
                  }}
                >
                  {currentQuestion + 1}/{questions.length}
                </Typography>
              </Box>
              <Box display="flex" flexDirection="row" justifyContent="center">
                <Typography
                  sx={{
                    fontSize: "calc(8px + 2vmin)",
                    fontWeight: 600,
                  }}
                >
                  {questions[currentQuestion].questionText}
                </Typography>
              </Box>
              <Box display="flex" flexDirection="row" justifyContent="center">
                <Box display="flex" flexDirection="row" justifyContent="center">
                  {questions[currentQuestion].answerOptions.map((question) => (
                    <Box padding={4}>
                      <Button
                        onClick={() => handleNextQuestion(question.isCorrect)}
                        variant="contained"
                        color="secondary"
                      >
                        {question.answerText}
                      </Button>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </>
        )}
      </div>
      {/* </Box> */}
    </>
  );
}

export default QuizFormTwo;
