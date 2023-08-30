import React from 'react';
import heroImg from '../Images/2.jpg';
import '../Styles/CoursePresentation.css';

export default function CoursePresentation() {
  return (
    <section
      className="course-presentation"
      id="course-presentation"
    >
      <div className="div-course-presentation">
        <h3>O que é a mentoria de Liderança Feminina?</h3>
        <p>
          É uma resposta a necessidade de preparar integralmente a
          líder. Tem como estratégia de atuação principal aliar teoria
          a pratica, à medida que as alunas também terão
          oportunidade de discipular outras mulheres.
        </p>
        <h3>O que você vai aprender na Mentoria?</h3>
        <p>
          <p><b>Modulo 1</b></p>
          Conhecer a si mesma, curar feridas emocionais,
          entender seu temperamento e personalidade para gerenciar
          suas emoções e interromper valores nocivos e reforçar bons valores.
        </p>
        <p>
          <p><b>Modulo 2</b></p>
          Confirmar seu propósito, missão e chamado;
          aprender a desenvolver seus dons, fruto do Espírito
          e estar firme diante das batalhas espirituais.
        </p>
        <p>
          <p><b>Modulo 3</b></p>
          Desenvolver a inteligência emocional para liderança;
          entender o comportamento da sua equipe e extrair o melhor que existe nela.
        </p>
        <h3>Como funciona a mentoria?</h3>
        <p>
          A mentoria tem a duração de 6 meses com conteúdo teórico e prático.
          As aulas acontecem quinzenalmente, ao vivo as terças feiras, das 20h as 22h.
          Todas as aulas ficam gravadas para assistir quando e onde quiser.
          O material fica disponível durante 1 ano para a aluna.
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
