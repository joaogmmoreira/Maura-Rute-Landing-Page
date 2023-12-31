import React from 'react';
import { isMobile } from 'react-device-detect';
import headerimg from '../Images/HeaderImg.png';
import MenuPopover from '../Popover/MenuPopover';
import '../Styles/Header.css';

export default function Header() {
  const renderNavMenu = () => {
    const items = (
      <nav className="nav-mobile">
        <a className="nav-menu-mobile" href="#header">Home</a>
        <a className="nav-menu-mobile" href="#to-whom">Para quem</a>
        <a className="nav-menu-mobile" href="#personal-presentation">Quem sou eu</a>
        <a className="nav-menu-mobile" href="#course-presentation">O Curso</a>
        <a className="nav-menu-mobile" href="#form">Inscreva-se</a>
      </nav>
    );
    if (isMobile) {
      return (
        <header
          id="header"
          className="header-mobile"
        >
          <img
            src={headerimg}
            alt="Mentoria liderança cristã Feminina"
            className="header-img"
          />
          <MenuPopover items={items} />
        </header>
      );
    }
    return (
      <header
        id="header"
        className="header-desktop"
      >
        <img
          src={headerimg}
          alt="Mentoria liderança cristã Feminina"
          className="header-img"
        />
        <nav className="nav-desktop">
          <a className="nav-menu-desktop" href="#header">Home</a>
          <a className="nav-menu-desktop" href="#to-whom">Para quem</a>
          <a className="nav-menu-desktop" href="#personal-presentation">Quem sou eu</a>
          <a className="nav-menu-desktop" href="#course-presentation">O Curso</a>
          <a className="nav-menu-desktop" href="#form">Inscreva-se</a>
        </nav>
      </header>
    );
  };

  return renderNavMenu();
}
