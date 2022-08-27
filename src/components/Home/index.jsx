import "./styles.scss";

import { useEffect, useRef, useState } from "react";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { Counter } from "../Counter/Index";
import backgFooter from "../../assets/img/backg-footer.png";
import branch from "../../assets/img/FLOWER.png";
import bus from "../../assets/img/bus.png";
import copy from "../../assets/img/cop.png";
import dance from "../../assets/img/dance.png";
import faceLogo from "../../assets/img/FacebookLogo.png";
import flowerRegalo from "../../assets/img/hojamarron.png";
import flowerSingle from "../../assets/img/Flower-small.png";
import flowerTop from "../../assets/img/flower-top-left.png";
import instaLogo from "../../assets/img/InstagramLogo.png";
import invitacionLogo from "../../assets/img/ubicacion.png";
import mapa from "../../assets/img/mapa_pin.png";
import photoUs from "../../assets/img/lucas-y-yo.jpeg"
import regaloicon from "../../assets/img/regalo.png";
import shoe from "../../assets/img/shoe.png";
import tikLogo from "../../assets/img/TiktokLogo.png";
import useWindowSize from "../../hooks/useWindowSize";

export const Home = () => {
  const [state, setState] = useState({
    value: "000000000000000000001",
    copied: false,
  });
  const [state2, setState2] = useState({
    value: "000000000000000000002",
    copied: false,
  });
  const [state3, setState3] = useState({
    value: "000000000000000000003",
    copied: false,
  });

  const onCopy = () => {
    setState({ copied: true });
  };
  const onCopy2 = () => {
    setState2({ copied: true });
  };
  const onCopy3 = () => {
    setState3({ copied: true });
  };

  //Hook to grab window size
  const size = useWindowSize();

  // Ref for parent div and scrolling div
  const scrollContainer = useRef();
  const scrollImage = useRef();

  // Configs
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  // Run scrollrender once page is loaded.
  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  //set the height of the body.
  useEffect(() => {
    setBodyHeight();
  }, [size.height]);

  //Set the height of the body to the height of the scrolling div
  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  };

  // Scrolling
  const skewScrolling = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;

    // Difference between
    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;

    //Assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;

    //loop vai raf
    requestAnimationFrame(() => skewScrolling());

    scrollImage.current.style.transform = `opacity: 1`;
    scrollImage.current.style.transform = `transform: rotateZ(-2deg)`;
  };
  

  return (
    <div ref={scrollContainer}>
      <main id="main-section">
        <img className="img-flower" src={flowerTop} alt="flower" width={20} />

        <div className="home">
          <div>
            <h1>
              Jesica <br /> & <br /> Lucas
            </h1>
            <h6>
              ¡Siiii, Nos <br /> Casamooos!
            </h6>
          </div>
        </div>

        <div className="background-counter">
          {/* <button onClick={notify}>Inscreva-se</button> */}
        </div>
        <div className="counter2">
          <Counter />
          {/* <button onClick={notify}>Inscreva-se</button> */}
        </div>
        {/* <div>
          <img className="img-mountain" src={mountain} alt="flower" width={20} />
        </div> */}
      </main>

      <div id="Bienvenidos!" className="info-section">
        <div>
          <h1>14&nbsp; Enero 2023</h1>
          <h2>Ceremonia desde 11:30hs.</h2>
          <div>
            <img className="flower-small" src={flowerSingle} alt="flower" />
            <h3>
              Quinta <br /> "Selva Madre"
            </h3>
          </div>
          <p>
            ¡Estamos super felices! Nos <br /> sentimos en las nubes y queremos
            <br /> compartir con vos todo nuestro <br /> amor. Por eso estamos
            preparando <br /> con mucho cariño y esfuerzo un <br /> casamiento
            en el que te lo pasarás <br />
            genial. <br /> <br /> Algo super importante, <br /> confirmanos lo
            antes posible por <br />
            favor, que así organizarlo todo nos <br /> será mucho más fácil.{" "}
            <br /> <br /> ¡Esperamos que disfruten tanto <br /> como nosotros,
            un abrazo muuuy <br /> grande! <br /> El día de la fiesta
            compartinos tus <br /> fotos del evento con
          </p>
        </div>
        <div className="redes-icon">
          <img src={instaLogo} alt="" width={50} />
          <img src={faceLogo} alt="" width={50} />
          <img src={tikLogo} alt="" width={50} />
        </div>
        <div className="hashtag-p">
          <p>#shesylu23</p>
        </div>
      </div>

      <div id="ubicacion" className="info-location">
        <div className="info-location-container">
          <img
            className="location-branch"
            src={branch}
            alt="decoration branch"
          />
          <img className="map" src={invitacionLogo} width={100} alt="img"></img>
          <h1>Ubicación</h1>
          <p>
            Realizaremos la ceremonia <br /> alegórica para los que no pudieron{" "}
            <br />
            acompañarnos en el civil a las <br /> 11:30hs. Luego empezamos con
            la <br />
            fiesta en el mismo lugar! <br /> Te dejamos la ubicación y algunos{" "}
            <br /> medios de transporte para guiarte.
          </p>
          <div className="adress-lines">
            <img src={mapa} width={70} alt="img" />
            <p>
              <b>María A. de Lescano 221, Ministro Rivadavia.</b> <br /> E/ 25
              de mayo y Mariano Acosta.
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104898.24840217024!2d-58.467208442805884!3d-34.75382283654006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32b3b749a3cd7%3A0x3a59437373aab63b!2sQuinta%20Selva%20Madre!5e0!3m2!1ses!2sar!4v1655488011237!5m2!1ses!2sar"
            width="100%"
            height="300"
            style={{ border: 0 }}
            title="madre selva"
          ></iframe>
        </div>
      </div>

      <div className="info-bus">
        <div className="img-bus">
          <img src={bus} width={70} alt="img" />
        </div>
        <div className="row-bus">
          <div>
            <p>
              <b>510 - 2</b> <br /> República Y <br /> Espora (X E. De <br />{" "}
              Rosas)
            </p>
          </div>
          <div>
            <p>
              <b>506</b> <br /> Gendarmería X <br /> Hospital X <br /> República
            </p>
          </div>
        </div>
        <div className="row-bus">
          <div>
            <p>
              <b>510 - 3</b> <br /> B° Libertad X 25 <br /> De Mayo <br />{" "}
              <b>
                ¡Te deja en la <br /> esquina!
              </b>
            </p>
          </div>
          <div>
            <p>
              <b>501</b> <br /> Longchamps <br /> 266 - 4 <br /> Mtro. Rivadavia
            </p>
          </div>
        </div>
      </div>

      <div className="invitation-title">
        <h2>
          ¿Nos acompañas <br /> o te lo perdés?
        </h2>
      </div>

      <div className="container-lucas-y-yo">
          <img src={photoUs} ref={scrollImage} className="lucas-y-yo is-visible" alt="" />
      </div>

      {/* <div id="asistencia" className="parallax">

        <div className="parallax">
          <p>
            Para confirmar tu asistencia sólo <br /> tenés que escribirnos a whatsapp <br />
            1137016891 para avisarnos si venís a <br /> disfrutar con nosotrxs o te lo <br />
            perdeees!!
          </p>
          <div className="button-contact">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "https://wa.me/message/Z4RYHFSMEJB2C1";
              }}
            >
              <i className="fa-brands fa-whatsapp"></i> Confirmar
            </button>
          </div>
        </div>
      </div> */}

      <div id="regalo" className="gift-section">
        <img className="flower-regalo" src={flowerRegalo} alt="flower"></img>
        <div className="img-plane">
          <img src={regaloicon} width={80} alt="img" />
        </div>
        <div>
          <h3>Regalo</h3>
          <h4>
            Para nosotros lo más importante <br /> es poder compartir con vos{" "}
            <br /> nuestro gran día. Y como sabrás no <br /> necesitamos nada
            más para casa, <br /> pero si nos queremos ir de Luna de <br />{" "}
            Miel♥. <br /> Y si deseas nos podés ayudar a <br />
            cumplir nuestro próximo sueño ✈️ <br /> por los siguiente medios:
          </h4>
          <p>CBU:</p>
          <div className="copy-clipboard">
            <p>000000000000000000001</p>
            <CopyToClipboard onCopy={onCopy} text={state.value}>
              <img src={copy} width={30} alt="copy-to-clipboard"></img>
            </CopyToClipboard>
          </div>
          <p>
            Alias: <br />
          </p>
          <div className="copy-clipboard">
            <p>000000000000000000002</p>
            <CopyToClipboard onCopy={onCopy2} text={state2.value}>
            <img src={copy} width={30} alt="copy-to-clipboard"></img>
            </CopyToClipboard>
          </div>
          <p>Alias Mercado pago:</p>
          <div className="copy-clipboard"> 
            <p>000000000000000000003</p>
            <CopyToClipboard onCopy={onCopy3} text={state3.value}>
            <img src={copy} width={30} alt="copy-to-clipboard"></img>
            </CopyToClipboard>
          </div>
          <p>
            También dejaremos un cofre para recibir <br /> en la fiesta, como
            prefieras♥
          </p>
        </div>
      </div>

      <div id="dress-code" className="dress-code-section">
        {/* <img src={flowerTop} className="img-flower-dess" alt="img" /> */}
        <div className="img-dress-code">
          <img src={shoe} width={150} alt="img" />
        </div>
        <div>
          <h4>Dress Code</h4>
          <h5>Elegante Sport</h5>
          <p>
            Peeeroooo te recomendamos que lleves otra muda de ropa cómoda y/o
            traje de baño ya que haremos juegos (si el clima lo permite) y
            tenemos pile para disfrutar al máximo.
          </p>
        </div>
      </div>

      <div id="playlist" className="playlist-section">
        <div className="img-playlist">
          <img src={dance} width={100} alt="img" />
        </div>
        <div>
          <h4>Los infaltables!</h4>
          <p>
            Queremos divertirnos junto a vos, <br /> por eso esperamos tus
            tenaikenes <br />
            favs que no pueden faltar.
          </p>
        </div>
        <div className="button-playlist">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://wa.me/message/Z4RYHFSMEJB2C1";
            }}
          >
            <i className="fa-brands fa-spotify"></i> Sugerir
          </button>
          <img src={backgFooter} className="background-footer" alt="background-footer" ></img>
        </div>
        <div className="footer">
          <h4>¡Te esperamos!</h4>
          <div>
            <span className="brand-letter">J</span>{" "}
            <span className="brand-letter-1">&</span>
            <span className="brand-letter">L</span>
          </div>
          <div className="credits">
            <h6>Designed by Jesica Tofaletti</h6>
            <h6>Developed by Lucas M. Cueva</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
