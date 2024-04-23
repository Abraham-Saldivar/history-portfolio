import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";

function Home() {
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const [showPopup, setShowPopup] = useState(false);

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

  return (
    <>
      <Box>
        <Typography
          padding={5}
          sx={{ fontSize: "calc(36px + 2vmin)", textAlign: "center" }}
        >
          Home Page
        </Typography>
      </Box>
      <Box
        padding={5}
        className="text"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {showPopup && (
          <div
            className="popup"
            style={{ top: popupPosition.y, left: popupPosition.x }}
          >
            This is the summary
          </div>
        )}
        <h1>
          Atque ab his initiis profecti omnium virtutum et originem et
          progressionem persecuti sunt.
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Verum hoc
          loco sumo verbis his eandem certe vim voluptatis Epicurum nosse quam
          ceteros.{" "}
          <a href="http://loripsum.net/" rel="noreferrer" target="_blank">
            Comprehensum, quod cognitum non habet?
          </a>{" "}
          <code>Estne, quaeso, inquam, sitienti in bibendo voluptas?</code> Quid
          enim dicis omne animal, simul atque sit ortum, applicatum esse ad se
          diligendum esseque in se conservando occupatum?{" "}
          <i>Illis videtur, qui illud non dubitant bonum dicere -;</i> Qui autem
          voluptate vitam effici beatam putabit, qui sibi is conveniet, si
          negabit voluptatem crescere longinquitate? Duo Reges: constructio
          interrete. <i>Multoque hoc melius nos veriusque quam Stoici.</i> Deque
          his rebus satis multa in nostris de re publica libris sunt dicta a
          Laelio. Cur fortior sit, si illud, quod tute concedis, asperum et vix
          ferendum putabit? Quasi vero aut concedatur in omnibus stultis aeque
          magna esse vitia, et eadem inbecillitate et inconstantia L.{" "}
          <code>Hic ambiguo ludimur.</code>{" "}
        </p>

        <blockquote cite="http://loripsum.net">
          E quo efficitur, non ut nos non intellegamus quae vis sit istius
          verbi, sed ut ille suo more loquatur, nostrum neglegat.
        </blockquote>

        <ul>
          <li>Qui ita affectus, beatum esse numquam probabis;</li>
          <li>
            Sed tamen enitar et, si minus multa mihi occurrent, non fugiam ista
            popularia.
          </li>
          <li>
            Etsi ea quidem, quae adhuc dixisti, quamvis ad aetatem recte isto
            modo dicerentur.
          </li>
          <li>
            Quicquid enim a sapientia proficiscitur, id continuo debet expletum
            esse omnibus suis partibus;
          </li>
          <li>
            Quis suae urbis conservatorem Codrum, quis Erechthei filias non
            maxime laudat?
          </li>
          <li>
            Rhetorice igitur, inquam, nos mavis quam dialectice disputare?
          </li>
        </ul>

        <dl>
          <dt>
            <dfn>Audeo dicere, inquit.</dfn>
          </dt>
          <dd>
            Ex ea difficultate illae fallaciloquae, ut ait Accius, malitiae
            natae sunt.
          </dd>
          <dt>
            <dfn>Paria sunt igitur.</dfn>
          </dt>
          <dd>At iam decimum annum in spelunca iacet.</dd>
          <dt>
            <dfn>Quo modo?</dfn>
          </dt>
          <dd>
            Quicquid enim a sapientia proficiscitur, id continuo debet expletum
            esse omnibus suis partibus;
          </dd>
          <dt>
            <dfn>Tu quidem reddes;</dfn>
          </dt>
          <dd>Quodsi ipsam honestatem undique pertectam atque absolutam.</dd>
        </dl>

        <ol>
          <li>
            Quid, quod homines infima fortuna, nulla spe rerum gerendarum,
            opifices denique delectantur historia?
          </li>
          <li>Omnes enim iucundum motum, quo sensus hilaretur.</li>
          <li>
            Polemoni et iam ante Aristoteli ea prima visa sunt, quae paulo ante
            dixi.
          </li>
          <li>
            Graecis hoc modicum est: Leonidas, Epaminondas, tres aliqui aut
            quattuor;
          </li>
          <li>
            Quid, si reviviscant Platonis illi et deinceps qui eorum auditores
            fuerunt, et tecum ita loquantur?
          </li>
        </ol>

        <h2>
          Quae qui non vident, nihil umquam magnum ac cognitione dignum
          amaverunt.
        </h2>

        <p>
          <a href="http://loripsum.net/" rel="noreferrer" target="_blank">
            Quid est igitur, inquit, quod requiras?
          </a>{" "}
          Quasi vero aut concedatur in omnibus stultis aeque magna esse vitia,
          et eadem inbecillitate et inconstantia L.{" "}
          <i>Non est igitur voluptas bonum.</i> Quis enim est, qui non videat
          haec esse in natura rerum tria? Ille enim occurrentia nescio quae
          comminiscebatur; <i>Si quicquam extra virtutem habeatur in bonis.</i>{" "}
          <i>Quae diligentissime contra Aristonem dicuntur a Chryippo.</i>{" "}
          Omnes, qui non sint sapientes, aeque miseros esse, sapientes omnes
          summe beatos, recte facta omnia aequalia, omnia peccata paria;{" "}
          <code>Non est ista, inquam, Piso, magna dissensio.</code>{" "}
          <i>Omnes enim iucundum motum, quo sensus hilaretur.</i>{" "}
        </p>

        <h3>
          Sed quoniam et advesperascit et mihi ad villam revertendum est, nunc
          quidem hactenus;
        </h3>

        <p>
          Et nunc quidem quod eam tuetur, ut de vite potissimum loquar, est id
          extrinsecus; Itaque in rebus minime obscuris non multus est apud eos
          disserendi labor. Tum Piso: Atqui, Cicero, inquit, ista studia, si ad
          imitandos summos viros spectant, ingeniosorum sunt; Atqui perspicuum
          est hominem e corpore animoque constare, cum primae sint animi partes,
          secundae corporis.{" "}
          <a href="http://loripsum.net/" rel="noreferrer" target="_blank">
            Dicimus aliquem hilare vivere;
          </a>{" "}
          Scientiam pollicentur, quam non erat mirum sapientiae cupido patria
          esse cariorem. Quis suae urbis conservatorem Codrum, quis Erechthei
          filias non maxime laudat? Id quaeris, inquam, in quo, utrum
          respondero, verses te huc atque illuc necesse est.{" "}
        </p>
      </Box>
    </>
  );
}

export default Home;
