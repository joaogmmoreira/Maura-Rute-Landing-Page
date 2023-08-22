import React from 'react';
import heroImg from '../Images/1.jpg';
import '../Styles/WhereDoWeBegan.css';

export default function WhereDoWeBegan() {
  return (
    <section className="begin">
      <h3>Apresentação</h3>
      <div className="div-begin">
        <p>
          As pressões sobre as líderes por vezes as tornam impotentes
          diante de tantos desafios pessoais, familiares, profissionais e ministeriais.
        </p>
        <p>
          A Academia de Mulheres INSPIRE chegou para te equipar para
          todos esses desafios. Um espaço para crescimento
          para você, líder em quaisquer áreas em que esteja atuando.
        </p>
      </div>
      <img className="hero1" src={heroImg} alt="Maura Rute falando ao microfone com a mão no peito" />
    </section>
  );
}
