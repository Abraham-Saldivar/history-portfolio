import toast, { Toaster } from "react-hot-toast";
import {
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
  styled,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import InstagramIcon from "@mui/icons-material/Instagram";
import ShareIcon from "@mui/icons-material/Share";
import EmailIcon from "@mui/icons-material/Email";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

function NavBar() {
  //   const instagramLink = "https://instagram.com/uhrugby?igshid=OGIzYTJhMTRmYQ==";
  //   const recipientEmail = "uhrfcpresident@gmail.com";
  //   const subject = "University of Houston Rugby Team Interest";
  //   const body =
  //     "I'm interested in joining the rugby team. Can you provide more information? 🏉";

  //   const openEmailTemplate = () => {
  //     const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(
  //       subject
  //     )}&body=${encodeURIComponent(body)}`;
  //     window.location.href = mailtoUrl;
  //   };

  //   function copyToClipboard() {
  //     navigator.clipboard.writeText("http://localhost:3000");
  //     toast.success("University of Houston Rugby URL copied!", {
  //       position: "bottom-center",
  //       className: "toaster-options",
  //     });
  //   }

  const CustomAppBar = styled(AppBar)({
    "& .MuiToolbar-root": {
      paddingLeft: 20,
      paddingRight: 5,
    },
  });
  const CustomButton = styled(Button)`
    &:hover {
      background-color: black;
    }
  `;

  const CustomIconButton = styled(IconButton)`
    &:hover {
      background-color: black;
    }
  `;
  return (
    <>
      <Toaster />
      <CustomAppBar className="custom-appbar" position="static" color="primary">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box display="flex" alignItems="center">
            <CustomIconButton
              href="/"
              size="large"
              edge="start"
              color="inherit"
            >
              <AutoStoriesIcon sx={{ fontSize: "5vh" }} />
            </CustomIconButton>
            <Box marginLeft={2}>
              <Typography sx={{ fontSize: "2vh" }}>
                UNIVERSITY OF HOUSTON
              </Typography>
              <Typography sx={{ fontSize: "2.5vh" }}>
                HISTORTY-INTERACTIVE-PORTFOLIO
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="flex-start"
            flexDirection="column"
            paddingTop={0.5}
          >
            {/* <Box
              display="flex"
              flexDirection="row"
              justifyContent="flex-end"
              sx={{ flexGrow: 1 }}
            >
              <CustomIconButton
                target="blank"
                href={instagramLink}
                size="large"
                edge="start"
                color="inherit"
              >
                <InstagramIcon sx={{ fontSize: "2.75vh" }} />
              </CustomIconButton>
              <CustomIconButton
                onClick={copyToClipboard}
                size="large"
                edge="start"
                color="inherit"
              >
                <ShareIcon sx={{ fontSize: "2.75vh" }} />
              </CustomIconButton>
              <CustomIconButton
                onClick={openEmailTemplate}
                size="large"
                edge="start"
                color="inherit"
              >
                <EmailIcon sx={{ fontSize: "2.75vh" }} />
              </CustomIconButton>
            </Box> */}
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="flex-end"
              sx={{ flexGrow: 1, padding: 1.25 }}
            >
              <CustomButton href="about-us" color="inherit" variant="text">
                Section 1
              </CustomButton>
              <CustomButton href="contact-us" color="inherit" variant="text">
                Section 2
              </CustomButton>
              <CustomButton
                href="news-and-events"
                color="inherit"
                variant="text"
              >
                Section 3
              </CustomButton>
            </Box>
          </Box>
        </Toolbar>
      </CustomAppBar>
    </>
  );
}
export default NavBar;
