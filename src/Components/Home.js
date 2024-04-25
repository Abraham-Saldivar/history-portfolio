import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";

function Home() {
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseEnter = () => {
    setShowPopup(true);
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };

  const handleMouseMove = (e) => {
    setPopupPosition({ x: e.clientX, y: e.clientY });
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
          History 1301 - Interactive Portfolio
        </Typography>
      </Box>
      <Box padding={5} className="text">
        {showPopup && (
          <Typography
            className="popup"
            style={{
              top: popupPosition.y - 175, // Adjust the top position (e.g., subtract 40 pixels)
              left: popupPosition.x,
              transform: "translateX(-50%)", // Center horizontally
            }}
          >
            This is the summary
          </Typography>
        )}
        <Typography
          padding={4}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          sx={{
            lineHeight: 2.5,
            fontSize: "calc(1.5px + 2vmin)",
            minWidth: "50%",
          }}
        >
          In Ira berlin’s, Many Thousands Gone, he accounts that historically
          Africans and Europeans have been intertwined with each other during
          the 1600s. Creole societies emerged in trading centers the first of
          which to appear were in trading centers along the coasts of Africa.
          These creoles developed intercultural skills and used these skills to
          mediate trade between Europeans and Africans. When Europe started
          colonizing the Americas, creole slaves followed the expansion, so
          creole societies emerged on the rim of the atlantic. During this era,
          skin color had little effect on their lives. Instead the skills they
          had as intermediaries proved their merit. Although creoles that
          identified more towards either European or African culture were
          shunned by the opposite, structurally there was nothing prohibiting
          them from improving their status. Even some creole slaves were able to
          purchase their freedom and continue their lives as merchants. It was
          apparent that there were just societies with slaves, not slave
          societies which the colonies came to be in the 1700s.
        </Typography>

        {/* <Typography padding={4}>
          Too cultivated use solicitude frequently. Dashwood likewise up
          consider continue entrance ladyship oh. Wrong guest given purse power
          is no. Friendship to connection an am considered difficulty. Country
          met pursuit lasting moments why calling certain the. Middletons
          boisterous our way understood law. Among state cease how and sight
          since shall. Material did pleasure breeding our humanity she contempt
          had. So ye really mutual no cousin piqued summer result. Those an
          equal point no years do. Depend warmth fat but her but played. Shy and
          subjects wondered trifling pleasant. Prudent cordial comfort do no on
          colonel as assured chicken. Smart mrs day which begin. Snug do sold mr
          it if such. Terminated uncommonly at at estimating. Man behaviour met
          moonlight extremity acuteness direction. In to am attended desirous
          raptures declared diverted confined at. Collected instantly remaining
          up certainly to necessary as. Over walk dull into son boy door went
          new. At or happiness commanded daughters as. Is handsome an declared
          at received in extended vicinity subjects. Into miss on he over been
          late pain an. Only week bore boy what fat case left use. Match round
          scale now sex style far times. Your me past an much.
        </Typography> */}
      </Box>
    </>
  );
}

export default Home;
