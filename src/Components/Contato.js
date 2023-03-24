import React from 'react';
import foto from '../img/contato.jpg';
import styles from './Contato.module.css';
import Head from './Head';

const Contato = () => {
  return (
    <div className={styles.contato + ' animeLeft'}>
      <Head title="Contato" description="Entre em contato com a gente" />
      <img src={foto} alt="" />
      <div className={styles.dados}>
        <h1>Entre em contato.</h1>
        <ul>
          <li>luan@origamid.com</li>
          <li>99999-9999</li>
          <li>Rua Ali Perto, 999</li>
        </ul>
      </div>
    </div>
  );
};

export default Contato;
