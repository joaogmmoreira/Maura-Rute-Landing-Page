import React from 'react';
import '../Styles/ToWhom.css';
import heroImg from '../Images/2.jpg';

export default function ToWhom() {
  return (
    <section
      className="to-whom"
      id="to-whom"
    >
      <div className="div-toWhom">
        <h3>Essa mentoria é para você que:</h3>
        <p>
          Não consegue treinar uma pessoa para substituir
          <br />
          Tem dificuldade com a lideranca da igreja
          <br />
          Acha que ministério é menosprezado
          <br />
          Esquece da importância do ministério diante de Deus
          <br />
          Está quase desistindo do ministério
          <br />
          Tem dificuldade de identificar novos poderes
          <br />
          Se sente sozinha no ministério
          <br />
          Não sabe delegar e acumula funções
          <br />
          Tem dificuldade de planejar
          <br />
          Não consegue dar prosseguimento ao planejamento anual
          <br />
          Está tão desanimada que faz tudo de qualquer jeito
          <br />
          Não tem mais uma vida de oração e não tem tempo com Deus
          <br />
          Apenas foca no ativismo
          <br />
          Por causa da sobrecarga está com o lar desajustado
        </p>
      </div>
      <div className="toWhom-objective">
        <p>
          <b>Eu ensino mulheres</b>
          {' '}
          a estarem ajustadas no ministerio e no lar,
          além de se organizar para ter mais tempo com a famípa
          e ter um diálogo esclarecido com a igreja.
        </p>
        <p>
          Além disso nós aprendemos a formar outras pderes e
          colocar as pessoas certas no lugar certo.
        </p>
      </div>
      <div className="div-public">
        <p>
          <b>E que mulheres são essas?</b>
          <br />
          Público alvo - Para quem é o treinamento de liderança cristã feminina?
          <br />
          Pastoras
          <br />
          Esposas de pastor
          <br />
          Líderes de mulheres (Ministério de Mulheres, MCM, Jovens, MR)
          <br />
          Líderes de crianças
          <br />
          Profissionais em qualquer área de atuação
        </p>
      </div>
      <img
        className="hero2"
        src={heroImg}
        alt="Maura Rute falando ao microfone com a mão esquerda levantada"
      />
    </section>
  );
}
