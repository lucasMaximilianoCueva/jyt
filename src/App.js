import './App.scss';

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Home } from './components/Home';
import { Navb } from './components/Nav';

export const App = () => {

  return (
    <Router>
      <Navb />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={"NotFound"} />
    </Routes>
  </Router>
  );
};