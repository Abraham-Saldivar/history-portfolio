import { Box, Button, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

function QuizFormThree() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      questionText:
        "Which US President issued the Emancipation Proclamation, declaring all slaves in Confederate territory to be free?",
      answerOptions: [
        { answerText: "Abraham Lincoln", isCorrect: true },
        { answerText: "Thomas Jefferson", isCorrect: false },
        { answerText: "Andrew Jackson", isCorrect: false },
        { answerText: "James Madison", isCorrect: false },
      ],
    },
    {
      questionText:
        "What was the Supreme Court case in 1857 that ruled that African Americans, whether enslaved or free, could not be American citizens and had no standing to sue in federal court?",
      answerOptions: [
        { answerText: "Dred Scott v. Sandford", isCorrect: true },
        { answerText: "Plessy v. Ferguson", isCorrect: false },
        { answerText: "Brown v. Board of Education", isCorrect: false },
        { answerText: "Marbury v. Madison", isCorrect: false },
      ],
    },
    {
      questionText:
        "Who was the African American abolitionist and former slave who became a leading advocate for the abolition of slavery through his stirring speeches and writings?",
      answerOptions: [
        { answerText: "Frederick Douglass", isCorrect: true },
        { answerText: "Harriet Tubman", isCorrect: false },
        { answerText: "Sojourner Truth", isCorrect: false },
        { answerText: "Nat Turner", isCorrect: false },
      ],
    },
    {
      questionText:
        "What was the name of the network of secret routes and safe houses used by enslaved African Americans to escape to free states and Canada in the 19th century?",
      answerOptions: [
        { answerText: "Underground Railroad", isCorrect: true },
        { answerText: "Freedom Trail", isCorrect: false },
        { answerText: "Liberty Line", isCorrect: false },
        { answerText: "Escape Express", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which abolitionist led the raid on the federal armory at Harpers Ferry in 1859, aiming to start a slave rebellion, and was later captured and executed?",
      answerOptions: [
        { answerText: "John Brown", isCorrect: true },
        { answerText: "William Lloyd Garrison", isCorrect: false },
        { answerText: "Harriet Beecher Stowe", isCorrect: false },
        { answerText: "Nat Turner", isCorrect: false },
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

export default QuizFormThree;
