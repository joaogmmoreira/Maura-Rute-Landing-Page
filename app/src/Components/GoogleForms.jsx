import React from 'react';
import '../Styles/GoogleForms.css';

export default function GoogleForms() {
  return (
    <section
      className="form-section"
      id="form"
    >
      <div className="div-form">
        <h3>Inscreva-se</h3>
        <p>
          <h4><b>Bônus</b></h4>
          Diagnóstico da Liderança individual para as 03 primeiras inscritas.
          <br />
          Material didático completo acompanhado de links
          para testes, vídeos e áudios complementares.
          <br />
          Suporte pessoal da mentora através de Whatsapp.
          <br />
          Grupo de Whatsapp exclusivo da turma.
        </p>
        <iframe
          title="form"
          className="form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfA3GXGgSGh0HJNNbXfsJH5nt_5AaB_fE7nHyop8kP_n9szxA/viewform?embedded=true"
          width="640"
          height="848"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Carregando…
        </iframe>
      </div>
    </section>
  );
}
