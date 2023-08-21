import React from 'react';
import heroImg from '../Images/3.jpg';
import '../Styles/CoursePresentation.css';

export default function CoursePresentation() {
  return (
    <section
      className="course-presentation"
      id="course-presentation"
    >
      <div className="div-course-presentation">
        <h3>O projeto de mentoria e discipulado</h3>
        <ol className="course-list">
          <li><b>OBJETIVO</b></li>
          <p>
            O programa propõe o discipulado e o acompanhamento da mulher líder
            aspectos espiritual, físico e emocional
            por meio do fornecimento de ferramentas e recursos para o crescimento espiritual,
            desenvolvimento da inteligência emocional e consciência do cuidado com o corpo e saúde.
          </p>
          <li><b>JUSTIFICATIVA</b></li>
          <p>
            O programa de discipulado e mentoria para liderança feminina,
            será uma resposta a lacuna que temos no que diz respeito ao preparo integral da líder.
            Tem como estratégia de atuação principal aliar teoria a prática,
            à medida que as mentoradas também terão oportunidade de discipular outras mulheres.
          </p>
          <li><b>FORMATO</b></li>
          <p>
            Os encontros acontecerão quinzenalmente de forma online
            {' '}
            <b>as terças feiras as 20h</b>
            {' '}
            (Google Meet), com duração de 1 hora e meia a 2 horas.
            <br />
            Os encontros ficarão
            {' '}
            <b>gravados e a disposição das alunas</b>
            {' '}
            inscritas.
            <br />
            <b>Todas as aulas serão ao vivo.</b>
          </p>
          <li><b>DURAÇÃO</b></li>
          <p>
            Programa se dará em 6 meses - totalizando 12 encontros.
          </p>
          <li><b>CONTEÚDO</b></li>
          <p>
            Os conteúdos serão apresentados em formato de
            módulos para melhor compreensão e absorção.
          </p>
          <ul className="course-subjects">
            <li><b>INTRODUÇÃO (1 encontro)</b></li>
            <ul className="subject">
              <li>Liderança Feminina – Mulher em Posição de Destaque</li>
            </ul>
            <li>
              <b>Módulo 1 - Quem sou eu? (4 encontros)</b>
            </li>
            <ul className="subject">
              <li>Identidade e autoconhecimento</li>
              <li>Identidade ferida x identidade curada</li>
              <li>Crenças limitantes</li>
              <li>Entendendo o processo entre a dor e a cura</li>
              <li>Entendendo o temperamento para gerenciar as emoções</li>
              <li>Entendendo a personalidade para gerenciar as emoções</li>
              <li>Construção da autoimagem</li>
              <li>Desenvolvimento da autoestima</li>
            </ul>
            <li><b>Módulo 2 - Vida Cristã (4 encontros)</b></li>
            <ul className="subject">
              <li>
                Reafirmando o meu propósito (não ora mais, não lê a Bíblia,
                qual é o seu propósito em Deus)
              </li>
              <li>
                Desenvolvimento do Fruto do Espírito
                (domínio próprio, papel que não são nossos,
                afeta a família, com os outros líderes na igreja)
              </li>
              <li>Desenvolvimento dos dons (líderes no lugar errado)</li>
              <li>
                Desenvolvimento das Linguagens do Amor
                (como está o seu relacionamento com a família)
              </li>
              <li>
                Batalha Espiritual
                (caso de doença dentro de casa e não sabe que é uma luta espiritual)
              </li>
              <li>
                Missões, chamado e vocação
                (quando a gente perde o proposito, recebe o chamado mas não está focado)
              </li>
            </ul>
            <li><b>Módulo 3 - Liderança (3 encontros)</b></li>
            <ul className="subject">
              <li>Desenvolvimento da inteligência emocional</li>
              <li>Discipulado Comportamental</li>
              <li>Discipulando outras mulheres </li>
            </ul>
          </ul>
          <li><b>PERFIL DE SAÍDA</b></li>
          <ul>
            <p>Ao final do período a líder será capaz de:</p>
            <li>
              Conhecer a si mesma,
              curar feridas emocionais, entender os temperamentos
              e personalidades para gerenciar suas
              emoções e interromper valores nocivos e reforçar bons valores.
            </li>
            <li>
              Confirmar seu propósito, missão e chamado,
              aprender a desenvolver seus dons, Fruto do Espírito e Linguagem do amor e
              estar firme diante das batalhas espirituais.
            </li>
            <li>
              Desenvolver a inteligência emocional para liderança,
              entender o comportamento da discipulanda para conseguir
              extrair o melhor que existe nela.
            </li>
          </ul>
        </ol>
        <img
          className="hero4"
          src={heroImg}
          alt=""
        />
      </div>
    </section>
  );
}
