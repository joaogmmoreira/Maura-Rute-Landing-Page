import React from 'react';
import '../Styles/GoogleForms.css';

export default function GoogleForms() {
  return (
    <section
      className="form"
      id="form"
    >
      <div className="div-form">
        <h3>Increva-se</h3>
        <p>
          Preencha o formulário abaixo para se inscrever na lista de espera
          do nosso curso e receber um manual completo com todos os conteúdos
        </p>
        <iframe
          className="form"
          title="form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfA3GXGgSGh0HJNNbXfsJH5nt_5AaB_fE7nHyop8kP_n9szxA/viewform?embedded=true"
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
