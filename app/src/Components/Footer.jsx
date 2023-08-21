import React from 'react';
import '../Styles/Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="footer-title">
        <span>Academia de Mulheres Inspire</span>
        <br />
        <a href="https://www.instagram.com/maurarute/">Maura Rute</a>
      </div>
      <div className="dev-title">
        <span>
          Página criada pelo
          {' '}
        </span>
        <a href="https://www.linkedin.com/in/joao-moreira-dev/">Dev João Moreira</a>
      </div>
    </footer>
  );
}
