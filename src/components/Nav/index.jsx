import './styles.scss';

import { Container, Nav, Navbar } from 'react-bootstrap';

import { HashLink } from 'react-router-hash-link';
import {useState} from 'react';

export const Navb = () => {

  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
  };

  return (
    <>
      <Navbar fixed="top" expand="lg">
        <Container className={isActive ? 'bg-menu' : ''}>
          <HashLink className="nav-brand" smooth={true} to="/#main-section">
            {/* <span className="brand-letter">J</span>{' '}
            <span className="brand-letter-1">&</span>
            <span className="brand-letter">L</span> */}
          </HashLink>
          <Navbar.Toggle onClick={handleClick} aria-controls="basic-navbar-nav"  className='navbar-toggler d-flex d-lg-none flex-column justify-content-around'>
            <span className='toggler-icon top-bar'></span>
            <span className='toggler-icon middle-bar'></span>
            <span className='toggler-icon bottom-bar'></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <HashLink className="nav-link" smooth={true} to="/#Bienvenidos!">
                Información
              </HashLink>
              <HashLink className="nav-link" smooth={true} to="/#ubicacion">
              ¿Cómo llegar?
              </HashLink>
              <HashLink className="nav-link" smooth={true} to="/#asistencia">
                Asistencia
              </HashLink>
              <HashLink className="nav-link" smooth={true} to="/#regalo">
                Regalo
              </HashLink>
              <HashLink className="nav-link" smooth={true} to="/#dress-code">
                Dress Code
              </HashLink>
              <HashLink className="nav-link" smooth={true} to="/#playlist">
                Playlist
              </HashLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
