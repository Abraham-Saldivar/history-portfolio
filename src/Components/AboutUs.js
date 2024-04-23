import { Typography, Box } from "@mui/material";

function AboutUs() {
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
          About Us
        </Typography>
      </Box>
    </>
  );
}

export default AboutUs;
