import React from 'react';
import heroImg from '../Images/3.jpg';
import '../Styles/PersonalPresentation.css';

export default function PersonalPresentation() {
  return (
    <section
      className="personal-presentation"
      id="personal-presentation"
    >
      <div className="div-personal-presentation">
        <h3>Quem é Maura Rute?</h3>
        <p>
          Sou casada com o Pr. José Paulo há mais de 28 anos, mãe do Davi e
          da Isabel.
          <br />
          Possuo mais de 25 anos de experiência na Educação
          Cristã e vida eclesiástica.
          <br />
          Entre as atividades exercidas,
          destaco o aconselhamento pastoral, discipulado de mulheres
          e treinamento de liderança.
          <br />
          Sou escritora de vários artigos
          com temas diversos para revistas e jornais evangélicos.
          <br />
          Sou autora do E-book &quot;Mulheres Fazendo a Diferença na Nova Geração&quot;.
          <br />
          Terapeuta de mulheres,
          atendo individualmente pacientes no Brasil e no mundo.
          <br />
          Lidero as Esposas de Pastores da Convenção Batista Carioca.
        </p>
        <img
          className="hero2"
          src={heroImg}
          alt="Maura Rute falando ao microfone com a mão esquerda levantada"
        />
        <p>
          <h3>Conheça a minha formação</h3>
          Graduada em Educação Cristã, Pedagogia e Serviço Social.
          <br />
          Especialista em Terapia Sistêmica Familiar.
          <br />
          Especialista em Terapia Floral.
          <br />
          Escritora, Palestrante, Mentora de Mulheres e Líder de Esposa de Pastor
        </p>
      </div>
    </section>
  );
}
