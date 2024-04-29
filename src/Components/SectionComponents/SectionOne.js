import {
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Link,
} from "@mui/material";
import SixHundredT from "../Timelines/SixHundredT";
import { useState } from "react";
import QuizFormOne from "../QuizComponents/QuizFormOne";
import toast from "react-hot-toast";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ImageOne from "/Users/abraham_s/Commissions/history-portfolio/src/Components/Images/Court Ruling on Anthony Johnson and His Servant.jpeg";

function SectionOne() {
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

  const linkOneEK =
    "https://encyclopediavirginia.org/primary-documents/a-report-of-a-comittee-from-an-assembly-concerning-the-freedome-of-elizabeth-key-1656/";

  const sources = [
    {
      id: 2,
      title:
        '"Berlin, Ira. Many Thousands Gone : The First Two Centuries of Slavery in North America. Cambridge: Harvard University Press, 1998. Accessed April 25, 2024. ProQuest Ebook Central, 29."',
      url: "",
      other: "Book",
    },
    {
      id: 3,
      title:
        "“Court Ruling on Anthony Johnson and His Servant (1655).” Encyclopedia Virginia, December 7, 2020. https://encyclopediavirginia.org/primary-documents/court-ruling-on-anthony-johnson-and-his-servant-1655/.",
      url: "https://encyclopediavirginia.org/primary-documents/court-ruling-on-anthony-johnson-and-his-servant-1655/",
    },
    {
      id: 4,
      title:
        "“An act declaring that baptisme of slaves doth not exempt them from bondage” (1667)",
      url: "https://encyclopediavirginia.org/primary-documents/an-act-declaring-that-baptisme-of-slaves-doth-not-exempt-them-from-bondage-1667/",
    },
  ];

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
            The Charter Generation
          </Typography>
          <Typography sx={{ marginBottom: "25px", display: "inline" }}>
            {" "}
            In Ira berlin’s, Many Thousands Gone, he accounts that historically
            Africans and Europeans have been intertwined with each other during
            the 1600s. Creole societies emerged in trading centers the first of
            which to appear were in trading centers along the coasts of Africa.
            These creoles developed intercultural skills and used these skills
            to mediate trade between Europeans and Africans. When Europe started
            colonizing the Americas, creole slaves followed the expansion, so
            creole societies emerged on the rim of the atlantic. During this
            era, skin color had little effect on their lives. Instead the skills
            they had as intermediaries proved their merit. Although creoles that
            identified more towards either European or African culture were
            shunned by the opposite, structurally there was nothing prohibiting
            them from improving their status. Even some creole slaves were able
            to purchase their freedom and continue their lives as merchants. It
            was apparent that there were just societies with slaves, not slave
            societies which the colonies came to be in the 1700s.
          </Typography>
          <Typography sx={{ marginBottom: "25px", display: "inline" }}>
            “Atlantic Creoles shaped Black America’s charter generations in the
            Chesapeake”{" "}
            <Typography
              onClick={() => copyToClipboard(sources[0])}
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
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            sx={{ marginBottom: "25px" }}
            padding={2}
          >
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
              src={ImageOne}
              width={500}
              height={600}
              title="Court Ruling on Anthony Johnson and His Servant"
              alt="Court Ruling on Anthony Johnson and His Servant"
            />
          </Box>
          <Typography sx={{ marginBottom: "25px" }}>
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
          <Typography sx={{ marginBottom: "25px" }}>
            However, it is not completely true that legislation and common
            ideology did not lean towards white people. There was sure to be a
            bias to white characteristics. The case of Elizabeth key
            demonstrates this. Similar to Casar, Elizabeth Key was a former
            slave who sued for her freedom, but unlike Casar she succeeds and
            escapes slavery. Originally she was indentured under John Mottram,
            but after his death his heirs declared her enslaved.
          </Typography>
          <Typography sx={{ marginBottom: "25px" }}>
            Her victory was based on two factors: Heritage and Key’s practice of
            christianity{" "}
            <Typography
              onClick={() => copyToClipboard(sources[1].citation)}
              sx={{ display: "inline", fontWeight: 900, cursor: "copy" }}
            >
              <sup>(3).</sup>
            </Typography>{" "}
            She had been born from an English man and an enslaved woman. By
            common law it was established that the child of a freeman and
            enslaved woman was free. Furthermore, on account of her faith, she
            had been a devoted christian which was viewed favorably. The
            judicial ruling reflects the ideology that is less grounded on the
            basis of skin color but rather her “white” characteristics. To be
            sure, Elizabeth was black by color, but her partially white heritage
            and her adherence to christianity brought the committee to her
            favor. It is true that there had been apparent preferences and
            biases which both legislation and common practices were not void of,
            but it was also clear that African Americans still had agency in
            their lives despite their skin color.
          </Typography>
          <Box
            padding={4}
            style={{ outline: "2px dashed blue", marginBottom: "25px" }}
          >
            <Typography
              sx={{
                fontWeight: 900,
                fontSize: "2vh",
                textAlign: "center",
                textDecoration: "underline",
              }}
            >
              Commitee Report
            </Typography>
            <Typography>
              {" "}
              It appeareth to us that shee is the daughter of Thomas Key by
              severall Evidences and by a fine imposed upon the said Thomas for
              getting her mother with Child of the said Thomas That she hath bin
              by verdict of a Jury impannelled 20th January 1655 in the County
              of Northumberland found to be free by severall oathes which the
              Jury desired might be Recorded That by the Comon Law the Child of
              a Woman slave begott by a freeman ought to bee free That shee hath
              bin long since Christened Col. Higginson being her God father and
              that by report shee is able to give a very good account of her
              fayth That Thomas Key sould her onely for nine yeares to Col.
              Higginson with severall conditions to use her more Respectfully
              then a Comon servant or slave That in case Col. Higginson had gone
              for England within nine yeares hee was bound to carry her with him
              and pay her passage and not to dispose of her to any other For
              theise Reasons wee conceive the said Elizabeth ought to bee free
              and that her last Master should give her Corne and Cloathes and
              give her satisfaction for the time shee hath served longer then
              Shee ought to have done. But forasmuch as noe man appeared against
              the said Elizabeths petition wee thinke not fitt a determinative
              judgement should passe but that the County or Quarter Court where
              it shall be next tried to take notice of this to be the sence of
              the Burgesses of this present Assembly and that unless [original
              torn] shall appear to be executed and reasons [original torn]
              opposite part Judgement by the said Court be given [accordingly?]
              Charles Norwood Clerk Assembly James Gaylord hath deposed that
              this is a true coppy James Gaylord
            </Typography>

            <Box display="flex" flexDirection="row" justifyContent="center">
              <Link
                href={linkOneEK}
                padding={2}
                sx={{ textAlign: "center", color: "blue" }}
              >
                Source
              </Link>
            </Box>
          </Box>
          <Typography style={{ marginBottom: "25px" }}>
            In 1667, Virginia passes legislation that restricts the status of
            any enslaved person on the basis of baptism to be changed in
            response to Key’s case. This hints towards the beginning of the
            institution of slavery. Where key had the agency to change her
            enslaved status through faith, the assembly aimed to take that away
            from other enslaved persons. This is one instance which the colonies
            were starting to develop into slave societies.Of course naturally,
            with the influx of Africans coming in the later centuries, there
            needed to be a system to control them and their further generations.
          </Typography>
          {/*  */}
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
              (4) "WHEREAS some doubts have risen whether children that are
              slaves by birth, and by the charity and piety of their owners made
              pertakers of the blessed sacrament of baptisme, should be vertue
              of their baptisme be made ffree; It is enacted and declared by
              this grand assembly, and the authority thereof, that the
              conferring of baptisme doth not alter the condition of the person
              as to his bondage or ffreedome; that diverse masters, ffreed from
              this doubt, may more carefully endeavor the propagation of
              christianity by permitting children, though slaves, or those of
              greater growth if capable to be admitted to that sacrament.""
            </Typography>
          </Box>
          <Box sx={{ marginBottom: "25px" }}>
            <Typography>
              There were many more others like Anthony: Emmanuel Driggus,
              Domingo Matthews, Beshaw Ferdinando (4). The lines between slave
              and indentured servants were blurred and not specifically defined
              by race which allowed these men to not only escape slavery but
              build a prosperous life for themselves. Only until the
              implementation of legislation was the line between slavery and
              indentured servitude became more clear. As the colonies developed
              into slave societies and as further legislation were integrated,
              existing biases were reinforced. This formed the ideology of black
              and white. The institution assumed the blacks as enslaved and
              stripped them of any agency over their lives while indentured
              servants, whites in general, retained their mobility on the
              socio-economic ladder. As a result colonial America transformed
              from being a society with slaves to a slave society centered and
              built on Africans.
            </Typography>
          </Box>{" "}
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
        <QuizFormOne />
      </Box>
    </>
  );
}

export default SectionOne;
