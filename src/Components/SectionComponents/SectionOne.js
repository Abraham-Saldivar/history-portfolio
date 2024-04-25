import {
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import SixHundredT from "../Timelines/SixHundredT";
import { useState, useEffect } from "react";
import QuizFormOne from "../QuizComponents/QuizFormOne";
import toast from "react-hot-toast";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ImageOne from "/Users/abraham_s/Commissions/history-portfolio/src/Components/Images/Court Ruling on Anthony Johnson and His Servant.jpeg";

function SectionOne() {
  const [hoveredSection, setHoveredSection] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const [showPopup, setShowPopup] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setShowAlert(true);
    setOpen(true);
  };

  const handleClose = () => {
    setShowAlert(false);
    setOpen(false);
  };

  const handleHoverSection = (section) => {
    setHoveredSection(section);
  };

  const sources = [
    {
      citation:
        "Berlin, Ira. Many Thousands Gone : The First Two Centuries of Slavery in North America. Cambridge: Harvard University Press, 1998. Accessed April 25, 2024. ProQuest Ebook Central, 29.",
    },
    // Add more sources as needed
  ];
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseEnter = () => {
    setShowPopup(true);
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };

  const handleMouseMove = (e) => {
    setPopupPosition({ x: e.clientX, y: e.clientY });
  };

  function copyToClipboard(url) {
    navigator.clipboard.writeText(url);
    toast.success("Citation Copied!", {
      position: "bottom-center",
      className: "toaster-options",
    });
  }
  return (
    <>
      <Box padding={5} className="text">
        {showAlert && (
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Court Ruling on Anthony Johnson and His Servant (1655)"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <Typography sx={{ fontWeight: 900 }}>
                  {" "}
                  The deposition of Captain Samuel Goldsmith taken (in open
                  court) 8th of March Sayth, That beinge at the howse of Anthony
                  Johnson Negro (about the beginninge of November last to
                  receive a hogshead of tobacco) a Negro called John Casar came
                  to this Deponent, and told him that hee came into Virginia for
                  seaven or Eight yeares (per Indenture) And that hee had
                  demanded his freedome of his master Anthony Johnson; And
                  further said that Johnson had kept him his servant seaven
                  yeares longer than hee ought, And desired that this deponent
                  would see that hee might have noe wronge, whereupon your
                  Deponent demanded of Anthony Johnson his Indenture, hee
                  answered, hee never sawe any; The said Negro (John Casor)
                  replyed, hee came for a certayne tyme and had an Indenture
                  Anthony Johnson said hee never did see any But that hee had
                  him for his life; Further this deponent saith That mr. Robert
                  Parker and George Parker they knew that the said Negro had an
                  Indenture (in on Mr. Carye hundred on the other side of the
                  Baye) And the said Anthony Johnson did not tell the negro goe
                  free The said John Casor would recover most of his Cowes of
                  him; Then Anthony Johnson (as this deponent did suppose) was
                  in a feare. Upon this his Sonne in lawe, his wife and his 2
                  sonnes perswaded the said Anthony Johnson to sett the said
                  John Casor free. more saith not Samuel Goldsmith This daye
                  Anthony Johnson Negro made his complaint to the Court against
                  mr. Robert Parker and declared that hee deteyneth his servant
                  John Casor negro (under pretence that the said Negro is a free
                  man.) The Court seriously consideringe and maturely weighinge
                  the premisses, doe fynde that the said Mr. Robert Parker most
                  unjustly keepeth the said Negro from Anthony Johnson his
                  master as appeareth by the deposition of Captain Samuel
                  Goldsmith and many probably circumstances. It is therefore the
                  Judgment of the Court and ordered That the said John Casor
                  Negro forthwith returne unto the service of his said master
                  Anthony Johnson, And that mr. Robert Parker make payment of
                  all charge in the suit. also Execution.
                </Typography>
              </DialogContentText>
            </DialogContent>
          </Dialog>
        )}
        {showPopup && (
          <Typography
            className="popup"
            style={{
              top: popupPosition.y,
              left: popupPosition.x,
              transform: "translateX(-50%)",
            }}
          >
            {sources.map((source, index) => (
              <div key={index}>
                <Typography
                  component="span"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  sx={{ display: "inline", fontWeight: 900, cursor: "copy" }}
                >
                  {source.citation}
                </Typography>
              </div>
            ))}
          </Typography>
        )}
      </Box>
      <Box>
        <Typography
          padding={5}
          sx={{
            fontSize: "4vh",
            textAlign: "center",
            textDecoration: "overline",
          }}
        >
          Social Economic Status - African Americans 1600s
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        padding={5}
      >
        <Box width={{ minWidth: "50%" }}>
          <SixHundredT handleHoverSection={handleHoverSection} />
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="center">
          <Typography
            sx={{ marginBottom: "25px", display: "inline" }}
            className={hoveredSection === "Timeline One" ? "highlighted" : ""}
          >
            “Atlantic Creoles shaped Black America’s charter generations in the
            Chesapeake”{" "}
            <Typography
              onClick={() => copyToClipboard(sources[0].citation)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              sx={{ display: "inline", fontWeight: 900, cursor: "copy" }}
            >
              <sup>(2)</sup>
            </Typography>{" "}
            In the Chesapeake colonies, they were societies that practiced
            slavery but there weren’t laws that strictly defined blacks as
            slaves. This meant that African slaves could move through the
            socio-economic ladder. The case of Anthony Johnson showcases this.
            Anthony Johnson: Anthony Johnson was first sold in Jamestown,
            Virginia in 1621 to the Bennet family. He worked as a slave and over
            the years earned the respect of the Bennet’s for his hard labor and
            loyalty. He later gained freedom and was awarded a 250 acre head
            right.(30) In the case of Anthony Johnson, he was of African
            descent, originally name Antonio a negro but then changed his name,
            and was sold as a slave to a white family in Jamestown. However,
            unlike many slaves in the 1700s, he was not completely stripped of
            his ability towards social economic growth. He was able to work and
            bought his freedom. This shows that although there were African
            slaves in the colonies, there wasn’t a legislation that actively
            prevented him from freedom. Slaves were present in common practice
            but not completely represented in law. Anthony’s case is actually
            closer to indentured servitude than a slave. He was not held for
            life as a slave should be but instead was able to buy his freedom as
            an indentured servant would. This sheds light on the fact that the
            difference between slaves and indentured servants were blurred. The
            class of these two groups were the same regardless of skin color.
            Rather an individual's status is placed in his merit such as
            reputation or property. Certainly even Johnson did not see color as
            something that defined the enslaved as he had a black servant.
          </Typography>
          <Box display="flex" flexDirection="row" justifyContent="center">
            <Typography sx={{ display: "inline", fontWeight: 900 }}>
              "Court Ruling on Anthony Johnson and His Servant (1655)"
            </Typography>
          </Box>
          <Box padding={2}>
            <LazyLoadImage
              className="pointer"
              onClick={handleClickOpen}
              src={ImageOne}
              width={500}
              height={600}
              alt="Court Ruling on Anthony Johnson and His Servant"
            />
          </Box>

          <Typography
            sx={{ marginBottom: "25px" }}
            className={hoveredSection === "Timeline Two" ? "highlighted" : ""}
          >
            In this case Casar sues Johnson for keep him as a servant longer
            than his time. However the court upholds Johnson’s ownership of him.
            This case shows two things. The first the slave’s representation in
            court which was much unfamiliar to slaves in the 1700s. The second
            is that a black man owning another black man. It reinforces the idea
            that people determined slaves or servants by their debts or economic
            prosperity. This is especially true here because of the ironic
            nature of Casar's situation. However, during this time period it was
            not ironic, rather common practice because the law had not defined a
            specific skin color to be enslaved. Rather the economic position of
            an individual defined their status and class. Evidently this idea is
            reflected in both legislation and ideology.
          </Typography>
        </Box>
      </Box>
      <Box>
        <QuizFormOne />
      </Box>
    </>
  );
}

export default SectionOne;
