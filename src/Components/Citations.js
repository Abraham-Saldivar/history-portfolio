import { Typography, Box, Link } from "@mui/material";

function Citations() {
  const documents = {
    primary: [
      {
        title:
          "Court, Northampton County. 2020. “Court Ruling on Anthony Johnson and His Servant (1655) - Encyclopedia Virginia.” Encyclopedia Virginia. December 7, 2020.",
        url: "https://encyclopediavirginia.org/primary-documents/court-ruling-on-anthony-johnson-and-his-servant-1655/",
      },
      {
        title:
          "General Assembly . “‘a Report of a Comittee from an Assembly Concerning the Freedome of Elizabeth Key’ (1656).” Encyclopedia Virginia, December 7, 2020",
        url: "https://encyclopediavirginia.org/primary-documents/a-report-of-a-comittee-from-an-assembly-concerning-the-freedome-of-elizabeth-key-1656/",
      },
      {
        title:
          "General Assembly. “‘an Act Declaring That Baptisme of Slaves Doth Not Exempt Them from Bondage’ (1667).” Encyclopedia Virginia, December 7, 2020",
        url: "https://encyclopediavirginia.org/primary-documents/an-act-declaring-that-baptisme-of-slaves-doth-not-exempt-them-from-bondage-1667/",
      },
      {
        title:
          "Hunter, Hannah  Russell. “July 21, 1656: Elizabeth Key Wins Her Freedom.” Zinn Education Project, July 22, 2023. ",
        url: "https://www.zinnedproject.org/news/tdih/elizabeth-key-wins-freedom/",
      },
      {
        title:
          "“PHMC Abolition of Slavery.” Abolition of Slavery | PHMC > Our Documentary Heritage. Accessed April 29, 2024. ",
        url: "https://www.phmc.state.pa.us/portal/communities/documents/1776-1865/abolition-slavery.html",
      },
      {
        title:
          " Author: Federal Convention. “Fugitive Slave Clause, the Constitution of the United States (1787–1992).” Encyclopedia Virginia, July 12, 2021. ",
        url: "https://encyclopediavirginia.org/primary-documents/fugitive-slave-clause-the-constitution-of-the-united-states-1787-1992/#:~:text=1992)%20%2D%20Encyclopedia%20Virginia-,Fugitive%20Slave%20Clause%2C%20The%20Constitution%20of,United%20States%20(1787%E2%80%931992)&text=This%20clause%20of%20the%20U.S.,the%20Constitutional%20Convention%20of%201787.",
      },
      {
        title: "“The Emancipation Proclamation | National Archives.” n.d. ",
        url: "https://www.archives.gov/exhibits/featured-documents/emancipation-proclamation#:~:text=From%20the%20first%20days%20of,Union%20both%20militarily%20and%20politically",
      },
      {
        title: "The North star. (Rochester, NY), Dec. 3 1847",
        url: "https://www.loc.gov/resource/sn84026365/1847-12-03/ed-1/?dl=issue&sp=2&st=image&r=-0.211,0.056,0.602,0.324,0",
      },
    ],
    secondary: [
      {
        title:
          "Parry, Tyler, Tyler Parry, and Tyler Parry. 2019. “The Curious History of Anthony Johnson: From Captive African to Right-wing Talking Point.” AAIHS - African American Intellectual History Society. July 22, 2019. ",
        url: "https://www.aaihs.org/the-curious-history-of-anthony-johnson-from-captive-african-to-right-wing-talking-point/",
      },
      {
        title:
          "Lewis, Femi. 2020. “Black History Timeline: 1700 - 1799.” ThoughtCo. December 16, 2020. ",
        url: "https://www.thoughtco.com/african-american-history-timeline-1700-1799-45434",
      },
      {
        title: "“Slave Labor.” Digital history. Accessed April 29, 2024.",
        url: "https://www.digitalhistory.uh.edu/disp_textbook.cfm?smtid=2&psid=3041#:~:text=During%20the%201850s%2C%20half%20a,sawmills%2C%20gristmills%2C%20and%20quarries. ",
      },
      {
        title:
          "“Uncle Tom’s Cabin.” Harriet Beecher Stowe Center. Accessed April 29, 2024.",
        url: "https://www.harrietbeecherstowecenter.org/harriet-beecher-stowe/uncle-toms-cabin/",
      },
      {
        title:
          "Berlin, Ira. Many Thousands Gone : The First Two Centuries of Slavery in North America. Cambridge: Harvard University Press, 1998. Accessed April 25, 2024. ProQuest Ebook Central, 29.",
        url: "",
      },
      {
        title:
          "Brinkley, Alan, John M. Giggie, and Andrew J. Huebner. The Unfinished Nation: A concise history of the American people. New York: McGraw Hill, 2023. ",
        url: "",
      },
      {
        title:
          "Horton, James O., Horton, Lois E., and Horton, Lois E.. In Hope of Liberty : Culture, Community and Protest among Northern Free Blacks, 1700-1860. New York: Oxford University Press, Incorporated, 1996. Accessed April 29, 2024. ProQuest Ebook Central.",
        url: "",
      },
    ],
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
          Bibliography
        </Typography>
        <Box padding={4} display="flex" justifyContent="center">
          <Box width="50%">
            <Box padding={4} style={{ outline: "2px dashed blue" }}>
              <Box display="flex" flexDirection="row" justifyContent="center">
                <Typography
                  sx={{
                    textAlign: "starts",
                    fontSize: "3.5vh",
                    // fontWeight: 700,
                    // textDecoration: "underline",
                    marginBottom: "25px",
                  }}
                >
                  Primary Sources
                </Typography>
              </Box>
              <Box
                padding={4}
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                >
                  {documents.primary.map((document) => {
                    return (
                      <Box sx={{ marginBottom: "15px" }}>
                        <Link
                          sx={{ color: "blue" }}
                          href={document.url}
                          target="_blank"
                          rel="noopener"
                        >
                          {document.title}
                        </Link>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        {/*  */}
        <Box padding={4} display="flex" justifyContent="center">
          <Box width="50%">
            <Box padding={4} style={{ outline: "2px dashed blue" }}>
              <Box display="flex" flexDirection="row" justifyContent="center">
                <Typography
                  sx={{
                    textAlign: "starts",
                    fontSize: "3.5vh",
                    // fontWeight: 700,
                    // textDecoration: "underline",
                    marginBottom: "25px",
                  }}
                >
                  Secondary and Tertiary Sources
                </Typography>
              </Box>
              <Box
                padding={4}
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                >
                  {documents.secondary.map((document) => {
                    return (
                      <Box sx={{ marginBottom: "15px" }}>
                        {document.url === "" ? (
                          <>
                            <Typography
                              sx={{
                                display: "inline",
                                fontWeight: 900,
                                marginBottom: "25px",
                              }}
                            >
                              (Book) - {document.title}
                            </Typography>
                          </>
                        ) : (
                          <Box sx={{ marginBottom: "15px" }}>
                            <Link
                              sx={{ color: "blue" }}
                              href={document.url}
                              target="_blank"
                              rel="noopener"
                            >
                              {document.title}
                            </Link>
                          </Box>
                        )}
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        {/*  */}
      </Box>
    </>
  );
}

export default Citations;
