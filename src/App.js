// import logo from "./logo.svg";
// import "./App.css";
// Theme
import { createTheme, ThemeProvider } from "@mui/material/styles";
// React Router Dom
import { Route, Routes } from "react-router-dom";
// Components
import SectionOne from "./Components/SectionComponents/SectionOne";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import SectionTwo from "./Components/SectionComponents/SectionTwo";
import SectionThree from "./Components/SectionComponents/SectionThree";
import Citations from "./Components/Citations";
import { CssBaseline, Box } from "@mui/material";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Loading from "./Loading";
function App() {
  const [loading, setLoading] = useState(false);

  let theme = createTheme({
    palette: {
      primary: {
        // main: "#D40C2E",
        main: "#ECE2D0",
      },
      secondary: {
        main: "#BFB5AF",
      },
      background: {
        paper: "#C9C5BA",
      },
      tertiary: {
        main: "#f2f2f2",
      },
      black: {
        main: "#000000",
      },
      white: {
        main: "#fefefe",
      },
    },
    typography: {
      body1: {
        color: "#000000",
      },
      fontFamily: ["Lato"].join(","),
    },
  });
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    toast("Click on the tabs go through the centuries in the United States", {
      icon: "🤓",
      duration: 4000,
      position: "top-left",
    });
  }, []);

  // loripsum.net/api/3/plaintext

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        {loading ? (
          <>
            <CssBaseline />
            <Box
              sx={{
                width: "100%",
                height: "100vh",
                bgcolor: "primary.main",
              }}
            >
              <Loading />
            </Box>
          </>
        ) : (
          <>
            <Toaster />
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="section-one" element={<SectionOne />} />
              <Route path="section-two" element={<SectionTwo />} />
              <Route path="section-three" element={<SectionThree />} />
              <Route path="citations" element={<Citations />} />
            </Routes>
          </>
        )}
      </ThemeProvider>
    </>
  );
}

export default App;

// {
//   "hosting": {
//     "public": "build",
//     "ignore": [
//       "firebase.json",
//       "**/.*",
//       "**/node_modules/**"
//     ],
//     "rewrites": [
//       {
//         "source": "**",
//         "destination": "/index.html"
//       }
//     ],
//     "headers": [
//       {
//         "source": "/service-worker.js",
//         "headers": [
//           {
//             "key": "Cache-Control",
//             "value": "no-cache"
//           }
//         ]
//       }
//     ]
//   }
// }
