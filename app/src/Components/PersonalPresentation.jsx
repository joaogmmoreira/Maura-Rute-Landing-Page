import React from 'react';
import heroImg from '../Images/4.jpg';
import '../Styles/PersonalPresentation.css';

export default function PersonalPresentation() {
  return (
    <section
      className="personal-presentation"
      id="personal-presentation"
    >
      <div className="div-personal-presentation">
        <h3>Apresentação Pessoal</h3>
        <p>
          Filha amada do Pai, convertida e chamada desde a adolescência
          Filha, esposa e mãe
          <br />
          Formada em Educação Religiosa e Pedagogia pelo Seminário Teológico Batista do Sul do
          Brasil (1996)
          <br />
          Formada em Serviço Social pela Universidade do Grande Rio - UNIGRANRIO (2015)
          <br />
          Pós-Graduada em Terapia Sistêmica Individual, casal e Família pelo Instituto Logos (2021)
          <br />
          Articulista das Revistas Visão Missionária, Aventura Real e Manancial da UFMBB
          Líder das Esposas de pastores da Convenção Batista Carioca RJ (2019)
          Casada com o pr. José Paulo Moura Antunes desde 1995
          <br />
          Membro da Primeira Igreja Batista em Madureira - Rio de janeiro -
          onde seu esposo é o pastor titular
        </p>
      </div>
      <img
        className="hero3"
        src={heroImg}
        alt="Maura Rute falando com o microfone na mão esquerda lendo ao púlpito"
      />
    </section>
  );
}
