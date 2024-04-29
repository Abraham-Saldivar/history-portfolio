import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
function Home() {
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
      <Box display="flex" flexDirection="row" justifyContent="center">
        <Box padding={5} className="text" width="75%">
          <Typography
            padding={4}
            sx={{
              lineHeight: 2.5,
              fontSize: "calc(1.5px + 2vmin)",
              minWidth: "50%",
            }}
          >
            {" "}
            African American’s socio-economic status in the americas, from the
            charter generations through the civil war, have been complicated.
            It’s clear however that their status largely has been dictated by
            common practice and laws that bind them to slavery. The foundation
            of slavery is built on these laws which is further reinforced by
            either economic or social demands. On the economic side, slaves were
            seen as necessary to maintain the colonies economic system. On the
            social side, they were viewed as inferior and were needed to keep
            the class of blacks and whites separate. In both cases they lead to
            a harmful ideology that degraded blacks and kept them constantly
            oppressed. Only until the American revolution did questions on the
            morality of slavery rise. Through the 1800s, dissenting ideas of
            slavery gained momentum and eventually broke in the civil war.
            Through these different eras and time periods, we can see that
            African's socio-economic status was defined by their oppressors.
            They were tied down by laws and ideas enforced by their oppressors.
            They gained their freedom because of the decline of these ideas
            which later was reflected in legislation. And as a result, the
            status of African Americans became more loose as they were able to
            traverse the economic environment. No longer were they trapped in a
            state of slavery with no hope to escape the systematic definition of
            them. Thus the complexity of their status highlights the
            relationship of the decline of racist ideas and the socio-economic
            status of Africans.
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Home;
