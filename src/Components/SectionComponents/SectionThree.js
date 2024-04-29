import {
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Link,
} from "@mui/material";
import EightHundredT from "../Timelines/EightHundredT";
import QuizFormThree from "../QuizComponents/QuizFormThree";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ImageOne from "/Users/abraham_s/Commissions/history-portfolio/src/Components/Images/Image 2 of The North star (Rochester, N.Y.), December 3, 1847.png";
import { useState } from "react";
import toast from "react-hot-toast";

function SectionThree() {
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
  return (
    <>
      <Box>
        <Box>
          {" "}
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
                    We are now about to assume the manage moot of the editorial
                    department of a newspa per, devoted to the cauto of Liberty,
                    Human ity and Progress. The portion u one which, with the
                    purest nrtivon, we have long desired to occupy. It had long
                    been our anxious wish to see, in this slave-holding,
                    slave-trading, and negro-hating land, a printing-press and
                    paper, permanently established, under the complete control
                    and direction of the immediate victims of slavery and
                    oppression.
                  </Typography>
                </DialogContentText>
              </DialogContent>
            </Dialog>
          )}
        </Box>
        <Typography
          padding={5}
          sx={{
            fontSize: "4vh",
            textAlign: "center",
            textDecoration: "overline",
          }}
        >
          Social Economic Status - African Americans 1800s
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        padding={5}
      >
        <Box display="flex" flexDirection="column" justifyContent="center">
          <Typography sx={{ marginBottom: "25px" }}></Typography>
          <Typography sx={{ marginBottom: "25px" }}> </Typography>
          <Typography sx={{ marginBottom: "25px" }}></Typography>
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: "4vh",
              marginBottom: "25px",
              textAlign: "center",
              textDecoration: "underline",
            }}
          >
            Gaining Momentum
          </Typography>{" "}
          <Typography sx={{ marginBottom: "25px" }}>
            The difference between the beginning of the 19th century and the end
            of it in regard to the social standings of Africans in America, is
            intense. At the beginning of the 19th century, African slaves were
            still being used for labor, especially in the south, but in all of
            the United States, segregation was still part of day-to-day society.
            From 1800 to 1865, Africans in America and other abolitionists began
            to fight for the dissolution of slavery and racism. More rebellions
            began to rise and the country began to hear a new uprising begging
            for change. During the 19th century the Civil War came to be and
            would eventually allow for the legal rights to be changed, allowing
            for the liberation of Africans in the US. Though this changed things
            legally, it did not immediately entrench itself into society and
            would lead to a new and almost polished layer of racism in the
            country. Once this legal change was made, the country went into a
            new era which they labeled as the Reconstruction Era whose main goal
            was to define solutions and new ways for the productivity of the
            South. New civil liberties were introduced to many and new
            amendments were passed giving POC citizenship and suffrage. Africans
            were liberated from the chains of slavery and enabled them to climb
            the socio-economic ladder.
          </Typography>
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: "4vh",
              marginBottom: "25px",
              textAlign: "center",
              textDecoration: "underline",
            }}
          >
            Slavery now
          </Typography>{" "}
          <Typography sx={{ marginBottom: "25px" }}>
            The conditions of slaves from the 1700s compared to now have not
            changed much. In fact, they were arguably the same if not worse(5).
            This is due to the technology revolution. One major invention was
            the cotton gin which allowed slaves to work more efficiently and
            easier. Although work was made easier for the slaves, it just meant
            the plantations could increase their production to gain even more
            profits while maintaining the same amount of work. Because of the
            cotton gin, there was a resurgence in the need for slaves. The
            south’s economy was dependent on slaves. Not only did the south
            benefit from technological inventions, but so did the north. New
            railroads and canals being built meant that goods could move faster
            and cheaper. These routes connected the economy of the south to the
            north. Effectively, the north was also using slavery as an
            economical crutch. They used the cotton procured by slaves for their
            textile factories. Now slavery was a common interest for both sides
            of the country despite the North’s abolition of it in the from the
            civil war to the 1820’s. This certainly could have stabilized the
            slavery institute, but due to growing black literature the abolition
            movement gained momentum in the north. Unlike before, the north
            didn’t want their side to be rid of slavery, but also looked to free
            the slaves in the south which eventually led to the civil war.
          </Typography>
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: "4vh",
              marginBottom: "25px",
              textAlign: "center",
              textDecoration: "underline",
            }}
          >
            Enlightenment
          </Typography>{" "}
          <Typography sx={{ marginBottom: "25px" }}>
            In the early 19th century, the idea of enlightenment came to the
            front lines and was often criticized by abolitionists because of the
            “rights and liberties of all” that stood to be clearly untrue. Those
            on the other hand who supported slavery often did so because of
            their dependence on them economically and socially. Religious groups
            began to step forward and state that slavery was against Christian
            values, and this helped many with their transition of mentality. The
            south struggled immensely with changing this mentality and did so
            only because of the north's influence and lack of dependence on the
            use of slave labor. Because of the way the US Constitution was
            formatted, it allowed for states to decide the ruling and legal
            standings of slavery within their own territory. due to this the
            north and the south or incredibly devised over this topic and led
            into the American Civil War.{" "}
          </Typography>
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: "4vh",
              marginBottom: "25px",
              textAlign: "center",
              textDecoration: "underline",
            }}
          >
            Literature
          </Typography>{" "}
          <Typography sx={{ marginBottom: "25px" }}>
            Literature in the North was not actually meant for black people
            themselves, but it was a means to communicate the black community to
            whites. This is apparent because a lot of blacks could not read and
            it just made more sense that to promote abolition they needed to
            address it to the system of slavery, their oppressors.{" "}
          </Typography>
          <Typography sx={{ marginBottom: "25px" }}>
            Harriet Beecher Stowe was the writer of Uncle Tom’s cabin which
            expressed the injustices of slavery. Ironically, Stowe was a white
            woman that had only heard accounts from escapees and was motivated
            to write the novel(6) The novel sought to reflect the cruelties of
            slavery and questions the morality of slavery. This was a sentiment
            that was long suppressed by the economical advantages that slavery
            provided. Drowned by the prospering economy and advancing
            technologies, slavery could be overlooked as a necessary evil. Uncle
            Tom’s cabin helped bring light to the lives of slaves which could
            not be overlooked as a necessary evil that could continue.
          </Typography>
          <Typography sx={{ marginBottom: "25px" }}>
            {" "}
            Others used newspapers to communicate their message. An example of
            this would be Frederick Douglas’ newspaper “The North Star” ,a
            social space that was created to promote abolition support. In the
            first issue of The North Star Douglas states, “The position is one
            which, with the purest motives, we have long desired to occupy. It
            has long been our anxious wish to see, in this slave-holing,
            slave-trading, and negro-hating land.” This sentence alone
            demonstrates the education and awareness that The North Star
            provided because it acknowledges the prevalent social issue of their
            “negro-hating land”, and it does so in a sense of community. Through
            articles, editorials, and first-hand accounts, the newspaper served
            as a vessel of perception, and exposed the public to realities that
            African Americans were facing. Demonstrations of abolition, such as
            The North Star, contributed to the sought after improvement of
            African Americans socio-economic status, and even was interconnected
            with legislation during the time period. It was due to these
            literatures that made the foundation for the antebellum movement.{" "}
          </Typography>
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Box display="flex" flexDirection="row" justifyContent="center">
              <Typography sx={{ fontWeight: 900 }}>
                "The North star (Rochester, N.Y.), December 3, 1847"
              </Typography>
            </Box>
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
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: "4vh",
              marginBottom: "25px",
              textAlign: "center",
              textDecoration: "underline",
            }}
          >
            Compromise of the 1850
          </Typography>{" "}
          <Typography sx={{ marginBottom: "25px" }}>
            Of course it was not all linear, because the preservation of the
            union was just as important. The compromise of 1850 strengthened
            fugitive slave laws and allowed slave states to reach beyond their
            territory. Despite this, ideologies in the north did not change and
            people were still sentiment towards the cause. These ideologies were
            even strengthened due to this because of their fear of slave states
            encroaching onto their lands. Leading up to the civil war, there was
            a strong trend of ideas towards abolition which was accelerated by
            many influential black individuals as well as white ones.
            Comparatively, to the 1700s, this conflict shifted towards more of a
            North vs south rather than black and white. Rather more accurately,
            it was a clash of ideals and lifestyle.
          </Typography>
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: "4vh",
              marginBottom: "25px",
              textAlign: "center",
              textDecoration: "underline",
            }}
          >
            Civil war - Reconstruction
          </Typography>{" "}
          <Typography sx={{ marginBottom: "25px" }}>
            In 1860, Abraham Lincoln was selected to be the 16th president of
            the United States. This is the most crucial moment in the history of
            the United States and the Civil War. For he strongly opposed slavery
            and wanted to abolish it. The Emancipation Proclamation of 1863
            declared that slaves held in the seceded states would be free. Many
            may say this is insignificant because it didn’t end slavery
            immediately, and furthermore it did not apply to the whole country.
            However it marked a significant victory for the abolition cause and
            ultimately paved the way for the 13th Amendment, which abolished
            slavery completely. The Emancipation Proclamation supplied
            abolitionists with moral and legal justification and rallied
            support, inching closer to their goal of freedom.
          </Typography>
          <Typography sx={{ marginBottom: "25px" }}>
            After the civil war, the slavery institution finally dissolved and
            blacks saw improvements in their lives. The Freedman’s Bureau sought
            to provide food and shelter to emancipated slaves. They wanted to
            integrate slaves into society. Education was a major improvement as
            more black schools were being built. Black land ownership also
            increased from practically none to by 20% of the land owning
            population (7). It’s clear that with the collapse of slavery, blacks
            regained control of their lives. Although it was still difficult
            considering some slaves had nothing when they were emancipated, they
            were no longer bound by a system that intentionally stripped them of
            any control over their lives and barred them from the socio-economic
            ladder. They were prevented to own land and only worked as laborers.
            Africans in the south now worked for themselves mainly as
            sharecroppers.
          </Typography>
          {/* <Typography sx={{ marginBottom: "25px" }}></Typography> */}
          {/* <Typography sx={{ marginBottom: "25px" }}></Typography> */}
          {/* <Typography sx={{ marginBottom: "25px" }}></Typography> */}
          {/* <Typography sx={{ marginBottom: "25px" }}></Typography> */}
          {/* <Typography sx={{ marginBottom: "25px" }}></Typography> */}
        </Box>
      </Box>
      <Box>
        <QuizFormThree />
      </Box>
    </>
  );
}

export default SectionThree;
