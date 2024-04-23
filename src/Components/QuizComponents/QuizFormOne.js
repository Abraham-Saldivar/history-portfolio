import { Box, Button, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

function QuizFormOne() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      questionText:
        "Which European power established the first permanent colony in the Americas in the early 1600s?",
      answerOptions: [
        { answerText: "Spain", isCorrect: false },
        { answerText: "Portugal", isCorrect: false },
        { answerText: "England", isCorrect: true },
        { answerText: "France", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which crop became the primary source of wealth for European colonists in the Americas during the 1600s?",
      answerOptions: [
        { answerText: "Cotton", isCorrect: false },
        { answerText: "Indigo", isCorrect: false },
        { answerText: "Tobacco", isCorrect: true },
        { answerText: "Sugar", isCorrect: false },
      ],
    },
    {
      questionText:
        "What was the main purpose of the Transatlantic Slave Trade during the 1600s?",
      answerOptions: [
        { answerText: "To promote cultural exchange", isCorrect: false },
        { answerText: "To establish diplomatic ties", isCorrect: false },
        {
          answerText: "To provide labor for plantations in the Americas",
          isCorrect: true,
        },
        {
          answerText: "To facilitate scientific exploration",
          isCorrect: false,
        },
      ],
    },
    {
      questionText:
        "Which European nation was the dominant player in the Transatlantic Slave Trade during the 1600s?",
      answerOptions: [
        { answerText: "Spain", isCorrect: false },
        { answerText: "Portugal", isCorrect: false },
        { answerText: "England", isCorrect: false },
        { answerText: "Netherlands", isCorrect: true },
      ],
    },
    {
      questionText:
        "What was the name of the legal system that regulated the status of enslaved people in the English colonies during the 1600s?",
      answerOptions: [
        { answerText: "Manorialism", isCorrect: false },
        { answerText: "Feudalism", isCorrect: false },
        { answerText: "Encomienda", isCorrect: false },
        { answerText: "Indentured servitude", isCorrect: true },
      ],
    },
    {
      questionText:
        "Which colony in British North America was founded as a refuge for Catholics in the 1600s?",
      answerOptions: [
        { answerText: "Virginia", isCorrect: false },
        { answerText: "Maryland", isCorrect: true },
        { answerText: "Massachusetts", isCorrect: false },
        { answerText: "Pennsylvania", isCorrect: false },
      ],
    },
    {
      questionText:
        "What was the name of the uprising in Virginia in 1676 led by Nathaniel Bacon against colonial government policies?",
      answerOptions: [
        { answerText: "Pueblo Revolt", isCorrect: false },
        { answerText: "Salem Witch Trials", isCorrect: false },
        { answerText: "Bacon's Rebellion", isCorrect: true },
        { answerText: "Stono Rebellion", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which Caribbean island was the center of the Spanish Empire in the 1600s and a major hub of the Transatlantic Slave Trade?",
      answerOptions: [
        { answerText: "Cuba", isCorrect: true },
        { answerText: "Jamaica", isCorrect: false },
        { answerText: "Puerto Rico", isCorrect: false },
        { answerText: "Hispaniola", isCorrect: false },
      ],
    },
    {
      questionText:
        "What was the name of the first legislative assembly in British North America, established in Virginia in 1619?",
      answerOptions: [
        { answerText: "House of Commons", isCorrect: false },
        { answerText: "Parliament", isCorrect: false },
        { answerText: "House of Burgesses", isCorrect: true },
        { answerText: "Congress", isCorrect: false },
      ],
    },
    {
      questionText:
        "Who is credited with publishing the first book advocating for the abolition of slavery in the English colonies?",
      answerOptions: [
        { answerText: "Olaudah Equiano", isCorrect: false },
        { answerText: "Frederick Douglass", isCorrect: false },
        { answerText: "Quobna Ottobah Cugoano", isCorrect: false },
        { answerText: "Anthony Benezet", isCorrect: true },
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

export default QuizFormOne;
