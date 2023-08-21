import React from 'react';
import { isMobile } from 'react-device-detect';
import headerimg from '../Images/HeaderImg.png';
import '../Styles/Header.css';

export default function Header() {
  return (
    <header id="header">
      <img
        src={headerimg}
        alt="Mentoria liderança cristã Feminina"
        className="header-img"
      />
      <nav>
        <a className="nav-menu" href="#header">Home</a>
        <a className="nav-menu" href="#to-whom">Para quem</a>
        <a className="nav-menu" href="#personal-presentation">Quem sou eu</a>
        <a className="nav-menu" href="#course-presentation">O Curso</a>
        <a className="nav-menu" href="#form">Inscreva-se</a>
      </nav>
    </header>
  );
}
