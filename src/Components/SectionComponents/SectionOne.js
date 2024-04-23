import { Box, Typography } from "@mui/material";
import SixHundredT from "../Timelines/SixHundredT";
import { useState } from "react";
import QuizFormOne from "../QuizComponents/QuizFormOne";
function SectionOne() {
  const [hoveredSection, setHoveredSection] = useState(null);

  const handleHoverSection = (section) => {
    setHoveredSection(section);
  };
  return (
    <>
      <Box>
        <Typography
          padding={5}
          sx={{
            fontSize: "4vh",
            textAlign: "center",
            textDecoration: "overline",
          }}
        >
          Social Economic Status - African Americans 1600s
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        padding={5}
      >
        <Box width={{ minWidth: "50%" }}>
          <SixHundredT handleHoverSection={handleHoverSection} />
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="center">
          <Typography
            sx={{ marginBottom: "25px" }}
            className={hoveredSection === "Timeline One" ? "highlighted" : ""}
          >
            Do play they miss give so up. Words to up style of since world. We
            leaf to snug on no need. Way own uncommonly travelling now
            acceptance bed compliment solicitude. Dissimilar admiration so
            terminated no in contrasted it. Advantages entreaties mr he
            apartments do. Limits far yet turned highly repair parish talked
            six. Draw fond rank form nor the day eat. Horses nearer oh elinor of
            denote. Carried nothing on am warrant towards. Polite in of in oh
            needed itself silent course. Assistance travelling so especially do
            prosperous appearance mr no celebrated. Wanted easily in my called
            formed suffer. Songs hoped sense as taken ye mirth at. Believe fat
            how six drawing pursuit minutes far. Same do seen head am part it
            dear open to. Whatever may scarcely judgment had. Received shutters
            expenses ye he pleasant.
          </Typography>
          <Typography
            sx={{ marginBottom: "25px" }}
            className={hoveredSection === "Timeline Two" ? "highlighted" : ""}
          >
            Had invited beloved carried the colonel. Occasional principles
            discretion it as he unpleasing boisterous. She bed sing dear now son
            half. Civility vicinity graceful is it at. Improve up at to on
            mention perhaps raising. Way building not get formerly her peculiar.
            Up uncommonly prosperous sentiments simplicity acceptance to so.
            Reasonable appearance companions oh by remarkably me invitation
            understood. Pursuit elderly ask perhaps all. Drift as blind above at
            up. No up simple county stairs do should praise as. Drawings sir gay
            together landlord had law smallest. Formerly welcomed attended
            declared met say unlocked. Jennings outlived no dwelling denoting in
            peculiar as he believed. Behaviour excellent middleton be as it
            curiosity departure ourselves. Spoke as as other again ye. Hard on
            to roof he drew. So sell side ye in mr evil. Longer waited mr of
            nature seemed.
          </Typography>
        </Box>
      </Box>
      <Box>
        <QuizFormOne />
      </Box>
    </>
  );
}

export default SectionOne;
