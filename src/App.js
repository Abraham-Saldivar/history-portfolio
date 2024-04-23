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
import AboutUs from "./Components/AboutUs";
import { CssBaseline } from "@mui/material";
import { Toaster } from "react-hot-toast";

function App() {
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
        paper: "#9AB9A9",
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

  // loripsum.net/api/3/plaintext

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Toaster />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="section-one" element={<SectionOne />} />
          <Route path="section-two" element={<SectionTwo />} />
          <Route path="section-three" element={<SectionThree />} />
          <Route path="about-us" element={<AboutUs />} />

          {/* <Route path="news-and-events" element={<NewsPage />} /> */}
        </Routes>
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
