import { Box } from "@mui/material";
import { helix } from "ldrs";
helix.register("my-precious");

function Loading() {
  return (
    <>
      <Box
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          // right: "25%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <my-precious size="100" color="black"></my-precious>
      </Box>
    </>
  );
}
export default Loading;
