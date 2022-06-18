import './styles.scss';

import { Counter } from '../Counter/Index';
import bus from '../../assets/img/autobus.png';
import iconCool from '../../assets/img/icon-cool.png';
import locationIcon from '../../assets/img/location.png';
import loveHands from '../../assets/img/love-hands.png';
import mapa from '../../assets/img/mapa1.png';
import plane from '../../assets/img/plane.png';
import playlist from '../../assets/img/playlist.png';

export const Home = () => {
  return (
    <>
      <main id="main-section">
        <div className="counter">
          <Counter />
          {/* <button onClick={notify}>Inscreva-se</button> */}
        </div>

        <div className="home">
          <div>
            <h1>Jesica</h1>
            <h4>&</h4>
            <h1>Lucas</h1>
            <h6>
              ¡Siiiiiiiiiii,
              <br /> Nos casamos!
            </h6>
          </div>
        </div>
      </main>

      <div id="Bienvenidos!" className="info-section">
        <div>
          <h1>14 Enero 2023</h1>
          <h2>
            Ceremonia <br /> desde 11:30hs
          </h2>
          <h3>
            Quinta <br /> "Selva Madre"
          </h3>
          <p>
            ¡Estamos super felices! Nos sentimos en las nubes y queremos
            compartir con vos todo nuestro amor. Por eso estamos preparando con
            mucho cariño y esfuerzo un casamiento en el que te lo pasarás
            genial. Algo super importante, confirmanos lo antes posible por
            favor, que así organizarlo todo nos será mucho más fácil. ¡Esperamos
            que disfruten tanto como nosotros, un abrazo muuuy grande! El día de
            la fiesta compartinos tus fotos del evento con
          </p>
        </div>
      </div>

      <div id="ubicacion" className="info-location">
        <div>
          <img className="map" src={mapa} width={200} alt="img"></img>
          <p>
            Realizaremos la ceremonia alegórica para los que no pudieron
            acompañarnos en el civil a las 11:30hs. Luego empezamos con la
            fiesta en el mismo lugar! Te dejamos la ubicación y algunos medios
            de transporte para guiarte.
          </p>
          <div className="adress-lines">
            <img src={locationIcon} width={40} alt="img"/>
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
          <img src={bus} width={150} alt="img"/>
        </div>
        <div className="row-bus">
          <div>
            <p>
              <b>510 - 2</b> <br /> República Y <br /> Espora (X E. De <br />{' '}
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
              <b>510 - 3</b> <br /> B° Libertad X 25 <br /> De Mayo <br />{' '}
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

      <div id="asistencia" className="invitation-section">
        <div className="img-love-hands">
          <img src={loveHands} width={200} alt="img"/>
        </div>
        <div>
          <h2>
            ¿Nos acompañas o <br /> te lo perdés?
          </h2>
          <p>
            Para confirmar tu asistencia sólo tenés que escribirnos a whatsapp
            1137016891 para avisarnos si venís a disfrutar con nosotrxs o te lo
            perdeees!!! Dato importante si precisas algún menú especial como
            vegetariano, vegano, celíaco, diabético o no te gusta el asado y
            preferís pastas, avisanos!
          </p>
        </div>
        <div className="button-contact">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = 'https://wa.me/message/Z4RYHFSMEJB2C1';
            }}
          >
            <i className="fa-brands fa-whatsapp"></i> Confirmar
          </button>
        </div>
      </div>

      <div id="regalo" className="gift-section">
        <div className="img-plane">
          <img src={plane} width={200} alt="img"/>
        </div>
        <div>
          <h4>
            Para nosotros lo más importante es poder compartir con vos nuestro
            gran día. Y como sabrás no necesitamos nada más para casa, pero si
            nos queremos ir de Luna de Miel♥. Y si deseas nos podés ayudar a
            cumplir nuestro próximo sueño ✈️ por los siguiente medios:
          </h4>
          <p>
            CBU: <br /> 000000000000000000000 <br /> Alias: <br /> 000000000{' '}
            <br /> Alias Mercado pago: 000000000 <br /> También dejaremos un
            cofre para recibir <br /> en la fiesta, como prefieras♥
          </p>
        </div>
      </div>

      <div id="dress-code" className="dress-code-section">
        <div className="img-dress-code">
          <img src={iconCool} width={150} alt="img"/>
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
          <img src={playlist} width={200} alt="img"/>
        </div>
        <div>
          <h4>Playlist Spotify</h4>
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
              window.location.href = 'https://wa.me/message/Z4RYHFSMEJB2C1';
            }}
          >
            <i className="fa-brands fa-spotify"></i> Sugerir
          </button>
        </div>
        <div className="footer">
          <h4>¡Te esperamos!</h4>
          <div>
            <span className="brand-letter">J</span>{' '}
            <span className="brand-letter-1">&</span>
            <span className="brand-letter">L</span>
          </div>
          <div className="credits">
            <h6>Designed by Jesica Tofaletti</h6>
            <h6>Developed by Lucas M. Cueva</h6>
          </div>
        </div>
      </div>
    </>
  );
};
