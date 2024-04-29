import {
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Link,
} from "@mui/material";
import { useState } from "react";
import SevenHundredT from "../Timelines/SevenHundredT";
import QuizFormTwo from "../QuizComponents/QuizFormTwo";
import ImageTwo from "/Users/abraham_s/Commissions/history-portfolio/src/Components/Images/Image-Two.jpeg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import toast from "react-hot-toast";

function SectionTwo() {
  const [hoveredSection, setHoveredSection] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [open, setOpen] = useState(false);
  const sources = [
    {
      id: 1,
      title:
        "Abolition of Slavery | PHMC > Our Documentary Heritage (state.pa.us)",
      url: "https://www.phmc.state.pa.us/portal/communities/documents/1776-1865/abolition-slavery.html",
      other: "Book",
    },
    // {
    //   id: ,
    //   title: "",
    //   url: "",
    // },
  ];

  const handleHoverSection = (section) => {
    setHoveredSection(section);
  };

  const handleClickOpen = () => {
    setShowAlert(true);
    setOpen(true);
  };

  const handleClose = () => {
    setShowAlert(false);
    setOpen(false);
  };

  return (
    <>
      {showAlert && (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"An Act for the Gradual Abolition of Slavery - March 1, 1780"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Typography sx={{ fontWeight: 900 }}>
                When we contemplate our Abhorence of that Condition to which the
                Arms and Tyranny of Great Britain were exerted to reduce us,
                when we look back on the Variety of Dangers to which we have
                been exposed, and how miraculously our Wants in many Instances
                have been supplied and our Deliverances wrought, when even Hope
                and human fortitude have become unequal to the Conflict; we are
                unavoidably led to a serious and grateful Sense of the manifold
                Blessings which we have undeservedly received from the hand of
                that Being from whom every good and perfect Gift cometh.
                Impressed with these Ideas we conceive that it is our duty, and
                we rejoice that it is in our Power, to extend a Portion of that
                freedom to others, which hath been extended to us; and a Release
                from that State of Thraldom, to which we ourselves were
                tyrannically doomed, and from which we have now every Prospect
                of being delivered. It is not for us to enquire, why, in the
                Creation of Mankind, the Inhabitants of the several parts of the
                Earth, were distinguished by a difference in Feature or
                Complexion. It is sufficient to know that all are the Work of an
                Almighty Hand, We find in the distribution of the human Species,
                that the most fertile, as well as the most barren parts of the
                Earth are inhabited by Men of Complexions different from ours
                and from each other, from whence we may reasonably as well as
                religiously infer, that he, who placed them in their various
                Situations, hath extended equally his Care and Protection to
                all, and that it becometh not us to counteract his Mercies.{" "}
              </Typography>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      )}
      <Box>
        <Typography
          padding={5}
          sx={{
            fontSize: "4vh",
            textAlign: "center",
            textDecoration: "overline",
          }}
        >
          Social Economic Status - African Americans 1700s
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        padding={5}
      >
        <Box width={{ minWidth: "50%" }}>
          <SevenHundredT handleHoverSection={handleHoverSection} />
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="center">
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: "4vh",
              marginBottom: "25px",
              textAlign: "center",
              textDecoration: "underline",
            }}
          >
            Title
          </Typography>{" "}
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Typography
              sx={{ marginBottom: "25px" }}
              className={
                hoveredSection === "Timeline Three" ? "highlighted" : ""
              }
            >
              In the early years of American history, the 1700s was known for
              its extensive use of African slaves due to booming agricultural
              prospects. Major changes were occurring from the early colonial
              period until the American Revolution, which would have a great
              impact on the socioeconomic conditions for the future generations.
              The system of Slavery has long existed in the American Colonies at
              the start of the 1700s, and a significant number of the labor
              force were enslaved African-Americans. Because of the sudden
              influx of African slaves as well as the demand for slaves,
              Africans were viewed as slaves. As a result, slave laws reflected
              this and only targeted black people. African Americans'
              socioeconomic circumstance is complex and constantly evolving as a
              result of these variables, as well as shifting financial
              conditions and social attitudes.
            </Typography>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "2vh",
                marginBottom: "25px",
                textAlign: "center",
                textDecoration: "underline",
              }}
            >
              Black codes
            </Typography>{" "}
            <Typography
              sx={{ marginBottom: "25px" }}
              className={
                hoveredSection === "Timeline Four" ? "highlighted" : ""
              }
            >
              A set of laws known as the Louisiana Black Codes came into effect
              in the early 18th and beginning of 19th centuries in Louisiana and
              Southern states. African Americans’ socioeconomic status was
              seriously affected by the Louisiana Black Codes and similar laws
              in other Southern states, which reinforced African Americans’
              status as second-class workers and restricted their options for
              work. These laws also enforced harsh consequences for
              noncompliance, which advanced the economic exploitation of African
              Americans. In Article 4 of these codes, it prevented the
              intermarriage of both free and enslaved black with whites. This
              aims to separate the two races even further and further emphasize
              the superiority of whites. These codes reflect the idea of keeping
              the purity of the whites. It prevented any black person from
              gaining any position and advantage that was given by heritage. It
              kept the two classes distinctly different and maintained their
              current statuses, whites as upper class and blacks as lower class.
              Many other states had similar codes such as Virginia which also
              restricted intermarriage of blacks and whites. The implementation
              of these codes marked the transition of the colonies towards a
              slave society, but it went even further than that. It presented a
              social structure that assigned any black person to slavehood while
              whites were acting as masters or superior beings. These codes were
              implemented to maintain this order not only chaining Africans to
              slavery but to their social class below white people.
            </Typography>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "2vh",
                marginBottom: "25px",
                textAlign: "center",
                textDecoration: "underline",
              }}
            >
              After independence
            </Typography>{" "}
            <Typography sx={{ marginBottom: "25px" }}>
              The war for independence helped shape ideologies of freedom that
              highlights the hypocrisy of slavery. The drive for independence
              was to break away from their oppressors which in the eyes of the
              colonists were unjustly infringing on their freedom. The blatant
              contradiction of the argument the colonists used to justify their
              freedom could not be ignored. This was the turning point of
              slavery. The foundation of which the U.S was established could not
              allow the institution of slavery to continue. This shift in
              ideology marked the dissolution of the slavery institute. With
              this shift in ideology followed legislative action that gradually
              emancipated slaves and abolished slavery in the north.
            </Typography>
          </Box>
          <Box padding={2} sx={{ marginBottom: "25px" }}>
            <LazyLoadImage
              onMouseEnter={() =>
                toast("Click image to read document", {
                  icon: "ℹ️",
                  duration: 4000,
                  position: "top-left",
                })
              }
              className="pointer"
              onClick={handleClickOpen}
              src={ImageTwo}
              width={500}
              height={600}
              title="An Act for the Gradual Abolition of Slavery - March 1, 1780"
              alt="An Act for the Gradual Abolition of Slavery - March 1, 1780"
            />
          </Box>
          <Typography sx={{ marginBottom: "25px" }}>
            {" "}
            In the first few lines they acknowledge the reasons which they
            fought for independence and the freedom they gained for themselves.
            They go on to accept that by the same reasons they should extend
            this freedom to others. Evidently, the ideology of the revolution
            has led to a change in legislation which allows slaves to be
            gradually emancipated. Slavery was also abolished in vermont on the
            same grounds
          </Typography>
          <Typography sx={{ marginBottom: "25px" }}>
            There were some individuals that were able to escape slavery through
            their service in the continental army. Cato Howe was released from
            slavery after his service ended. However it was difficult for him to
            make a living due to his illiteracy and the postwar depression.
            Later in 1792 Cato Howe and some other settlers were given 106 acres
            of land. These freed slaves were able to gain property through their
            merits in the war. Howe was able to break out of his chains to
            slavery and move above his class. Although the revolution marked the
            beginning of abolition in the North, there were still many who
            stayed enslaved. In practice, some owners tried to circumvent the
            abolition laws by selling them to the south(5). Though despite
            changing attitudes, not everyone agreed about the freedom of
            slavery. There still were laws that looked to bind Africans and keep
            them in slavery. One notable one was the Fugitive slave act of 1793,
            which required runaways to be returned to the south
          </Typography>
          <Box
            padding={3}
            style={{ outline: "2px dashed green", marginBottom: "25px" }}
          >
            <Typography
              sx={{
                textAlign: "starts",
                fontSize: "2vh",
                fontWeight: 900,
                textDecoration: "underline",
                marginBottom: "25px",
              }}
            >
              Full Text
            </Typography>
            <Typography>
              (2) "Clause 3. No person held to Service or Labour in one State,
              under the Laws thereof, escaping into another, shall, in
              Consequence of any Law or Regulation therein, be discharged from
              such Service or Labour, but shall be delivered up on Claim of the
              Party to whom such Service or Labour may be due."
            </Typography>
          </Box>
          <Box
            padding={4}
            style={{ outline: "2px dashed blue", marginBottom: "25px" }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "2vh",
                fontWeight: 900,
                textDecoration: "underline",
                marginBottom: "25px",
              }}
            >
              Citations:
            </Typography>
            {sources.map((source, index) => {
              return (
                <Box key={index} sx={{ marginBottom: "15px" }}>
                  {source.url === "" ? (
                    <>
                      <Typography
                        sx={{
                          display: "inline",
                          fontWeight: 900,
                          marginBottom: "25px",
                        }}
                      >
                        ({source.id}){source.other} : {"     "}
                        <Typography sx={{ display: "inline" }}>
                          {source.title}
                        </Typography>
                      </Typography>
                    </>
                  ) : (
                    <Link
                      sx={{ color: "blue" }}
                      href={source.url}
                      target="_blank"
                      rel="noopener"
                    >
                      ({source.id}){source.title}
                    </Link>
                  )}
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
      <Box>
        <QuizFormTwo />
      </Box>
    </>
  );
}

export default SectionTwo;

// https://www.phmc.state.pa.us/portal/communities/documents/1776-1865/abolition-slavery.html
