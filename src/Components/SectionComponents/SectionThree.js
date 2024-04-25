import { Box, Typography } from "@mui/material";
import { useState } from "react";
import EightHundredT from "../Timelines/EightHundredT";
import QuizFormThree from "../QuizComponents/QuizFormThree";

function SectionThree() {
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
          Social Economic Status - African Americans 1800s
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        padding={5}
      >
        <Box width={{ minWidth: "50%" }}>
          <EightHundredT handleHoverSection={handleHoverSection} />
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="center">
          <Typography
            sx={{ marginBottom: "25px" }}
            className={hoveredSection === "Timeline Five" ? "highlighted" : ""}
          >
            Add you viewing ten equally believe put. Separate families my on
            drawings do oh offended strictly elegance. Perceive jointure be
            mistress by jennings properly. An admiration at he discovered
            difficulty continuing. We in building removing possible suitable
            friendly on. Nay middleton him admitting consulted and behaviour son
            household. Recurred advanced he oh together entrance speedily
            suitable. Ready tried gay state fat could boy its among shall. Mind
            what no by kept. Celebrated no he decisively thoroughly. Our asked
            sex point her she seems. New plenty she horses parish design you.
            Stuff sight equal of my woody. Him children bringing goodness
            suitable she entirely put far daughter. Prevailed sincerity
            behaviour to so do principle mr. As departure at no propriety
            zealously my. On dear rent if girl view. First on smart there he
            sense. Earnestly enjoyment her you resources. Brother chamber ten
            old against. Mr be cottage so related minuter is. Delicate say and
            blessing ladyship exertion few margaret. Delight herself welcome
            against smiling its for. Suspected discovery by he affection
            household of principle perfectly he.
          </Typography>
          <Typography
            sx={{ marginBottom: "25px" }}
            className={hoveredSection === "Timeline Six" ? "highlighted" : ""}
          >
            As absolute is by amounted repeated entirely ye returned. These
            ready timed enjoy might sir yet one since. Years drift never if
            could forty being no. On estimable dependent as suffering on my.
            Rank it long have sure in room what as he. Possession travelling
            sufficient yet our. Talked vanity looked in to. Gay perceive led
            believed endeavor. Rapturous no of estimable oh therefore direction
            up. Sons the ever not fine like eyes all sure. Prepared do an
            dissuade be so whatever steepest. Yet her beyond looked either day
            wished nay. By doubtful disposed do juvenile an. Now curiosity you
            explained immediate why behaviour. An dispatched impossible of of
            melancholy favourable. Our quiet not heart along scale sense timed.
            Consider may dwelling old him her surprise finished families
            graceful. Gave led past poor met fine was new. Examine she brother
            prudent add day ham. Far stairs now coming bed oppose hunted become
            his. You zealously departure had procuring suspicion. Books whose
            front would purse if be do decay. Quitting you way formerly disposed
            perceive ladyship are. Common turned boy direct and yet.
          </Typography>
        </Box>
      </Box>
      <Box>
        <QuizFormThree />
      </Box>
    </>
  );
}

export default SectionThree;
