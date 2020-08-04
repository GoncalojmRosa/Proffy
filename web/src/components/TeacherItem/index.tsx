import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export default function TeacherItem() {
  return (
    <div>
      <article className="teacher-item">
        <header>
          <img
            src="https://avatars2.githubusercontent.com/u/2254731?s=400&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4"
            alt="Diego Fernandes"
          />
          <div>
            <strong>Diego Fernandes</strong>
            <span>Química</span>
          </div>
        </header>
        <p>
          AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
          <br />
          AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        </p>
        <footer>
          <p>
            Preço/hora
            <strong>80.00€</strong>
          </p>

          <button type="button">
            <img src={whatsappIcon} alt="Whatsapp" />
            Entrar em Conctato
          </button>
        </footer>
      </article>
    </div>
  );
}
