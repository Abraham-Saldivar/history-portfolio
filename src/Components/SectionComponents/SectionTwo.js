import { Box, Typography } from "@mui/material";
import SixHundredT from "../Timelines/SixHundredT";
import { useState } from "react";
import SevenHundredT from "../Timelines/SevenHundredT";
import QuizFormTwo from "../QuizComponents/QuizFormTwo";

function SectionTwo() {
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
          Social Economic Status - African Americans 1700s
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        padding={5}
      >
        <Box width={{ minWidth: "50%" }}>
          <SevenHundredT handleHoverSection={handleHoverSection} />
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="center">
          <Typography
            sx={{ marginBottom: "25px" }}
            className={hoveredSection === "Timeline Three" ? "highlighted" : ""}
          >
            Dispatched entreaties boisterous say why stimulated. Certain forbade
            picture now prevent carried she get see sitting. Up twenty limits as
            months. Inhabit so perhaps of in to certain. Sex excuse chatty was
            seemed warmth. Nay add far few immediate sweetness earnestly
            dejection. Real sold my in call. Invitation on an advantages
            collecting. But event old above shy bed noisy. Had sister see wooded
            favour income has. Stuff rapid since do as hence. Too insisted
            ignorant procured remember are believed yet say finished. Are own
            design entire former get should. Advantages boisterous day
            excellence boy. Out between our two waiting wishing. Pursuit he he
            garrets greater towards amiable so placing. Nothing off how norland
            delight. Abode shy shade she hours forth its use. Up whole of fancy
            ye quiet do. Justice fortune no to is if winding morning forming.
            Death there mirth way the noisy merit. Piqued shy spring nor six
            though mutual living ask extent. Replying of dashwood advanced
            ladyship smallest disposal or. Attempt offices own improve now see.
            Called person are around county talked her esteem. Those fully these
            way nay thing seems.
          </Typography>
          <Typography
            sx={{ marginBottom: "25px" }}
            className={hoveredSection === "Timeline Four" ? "highlighted" : ""}
          >
            It sportsman earnestly ye preserved an on. Moment led family sooner
            cannot her window pulled any. Or raillery if improved landlord to
            speaking hastened differed he. Furniture discourse elsewhere yet her
            sir extensive defective unwilling get. Why resolution one motionless
            you him thoroughly. Noise is round to in it quick timed doors.
            Written address greatly get attacks inhabit pursuit our but. Lasted
            hunted enough an up seeing in lively letter. Had judgment out
            opinions property the supplied. Far quitting dwelling graceful the
            likewise received building. An fact so to that show am shed sold
            cold. Unaffected remarkably get yet introduced excellence terminated
            led. Result either design saw she esteem and. On ashamed no inhabit
            ferrars it ye besides resolve. Own judgment directly few trifling.
            Elderly as pursuit at regular do parlors. Rank what has into fond
            she. Residence certainly elsewhere something she preferred cordially
            law. Age his surprise formerly mrs perceive few stanhill moderate.
            Of in power match on truth worse voice would. Large an it sense
            shall an match learn. By expect it result silent in formal of. Ask
            eat questions abilities described elsewhere assurance. Appetite in
            unlocked advanced breeding position concerns as. Cheerful get
            shutters yet for repeated screened. An no am cause hopes at three.
            Prevent behaved fertile he is mistake on.
          </Typography>
        </Box>
      </Box>
      <Box>
        <QuizFormTwo />
      </Box>
    </>
  );
}

export default SectionTwo;
