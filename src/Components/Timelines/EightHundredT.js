import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Box, Typography } from "@mui/material";

function EightHundredT({ handleHoverSection }) {
  const data = {
    sections: ["Timeline Five", "Timeline Six"],
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Timeline position="alternate-reverse">
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

export default EightHundredT;
