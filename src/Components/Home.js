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
        ></Typography>
      </Box>
    </>
  );
}

export default Home;
