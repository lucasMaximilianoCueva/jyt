import "./other.scss";

import React, { useEffect, useRef } from "react";

import { Counter } from "../Counter/Index";
import flowerSingle from "../../assets/img/Flower-small.png";
import flowerTop from "../../assets/img/flower-top-left.png";
import images from "../../images/images";
import mountain from "../../assets/img/mountain-down-right.png";
import useWindowSize from "../../hooks/useWindowSize";

export const Other = () => {
  //Hook to grab window size
  const size = useWindowSize();

  // Ref for parent div and scrolling div
  const app = useRef();
  const scrollContainer = useRef();

  // Configs
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0
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
  };

  return (
    <div ref={app} className="App">
    <div ref={scrollContainer} className="scroll">

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

        <div className="counter">
          <Counter />
          {/* <button onClick={notify}>Inscreva-se</button> */}
        </div>

        <img className="img-mountain" src={mountain} alt="flower" width={20} />
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
          <img
            src="https://pbs.twimg.com/profile_images/730398192169328640/aN0B-LIm_400x400.jpg"
            alt=""
            width={30}
          />
          <img
            src="https://pbs.twimg.com/profile_images/730398192169328640/aN0B-LIm_400x400.jpg"
            alt=""
            width={30}
          />
          <img
            src="https://pbs.twimg.com/profile_images/730398192169328640/aN0B-LIm_400x400.jpg"
            alt=""
            width={30}
          />
        </div>
        <div className="hashtag-p">
          <p>#shesylu23</p>
        </div>
      </div>

    </div>
  </div>
  );
};


    //   {/* {images.map((image, index) => (
    //     <>
    //       <div key={index} className="img-container">
    //         <img src={image} alt={`people ${index}`} />
    //       </div>
    //       <h2>
    //         Skew <span className="outline">Scrolling</span>
    //       </h2>
    //     </>
    //   ))} */}