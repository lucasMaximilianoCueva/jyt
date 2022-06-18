import './styles.scss';

import { Container, Nav, Navbar } from 'react-bootstrap';

import { HashLink } from 'react-router-hash-link';

export const Navb = () => {
  return (
    <>
      <Navbar fixed="top" expand="lg">
        <Container>
          <HashLink className="nav-brand" smooth={true} to="/#main-section">
            <span className="brand-letter">J</span>{' '}
            <span className="brand-letter-1">&</span>
            <span className="brand-letter">L</span>
          </HashLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
