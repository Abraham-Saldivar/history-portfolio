import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Box, Typography, Button } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import toast from "react-hot-toast";

function SixHundredT({ handleHoverSection }) {
  const data = {
    sections: ["Timeline One", "Timeline Two"],
  };

  const showInformation = () => {
    console.log("Click on time period in order to get more information.");
    toast("Click on a time period in order to highlight the given text.", {
      icon: "ℹ️",
      duration: 4000,
      position: "top-left",
    });
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Timeline position="alternate-reverse">
          <Box display="flex" flexDirection="row" justifyContent="flex-start">
            <Button
              onClick={showInformation}
              color="black"
              startIcon={<InfoIcon />}
              sx={{ color: "#fefefe" }}
              variant="contained"
            >
              TIMELINE INFO
            </Button>
          </Box>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>START</TimelineContent>
          </TimelineItem>
          {data.sections.map((item) => {
            return (
              <>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography
                      paddingRight={2}
                      paddingLeft={2}
                      className="timeline_item"
                      onMouseOver={() => handleHoverSection(item)}
                      onMouseLeave={() => handleHoverSection(!item)}
                    >
                      {item}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              </>
            );
          })}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>END</TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </>
  );
}

export default SixHundredT;
