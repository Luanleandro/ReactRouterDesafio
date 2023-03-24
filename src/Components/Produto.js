import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Head from './Head';
import styles from './Produto.module.css';

const Produto = () => {
  const { id } = useParams();
  const [produto, setProduto] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProdutos(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
        setLoading(false);
      } catch (erro) {
        console.log('deu erro');
        setError(`Ocorreu um erro: ${erro}`);
      } finally {
        setLoading(false);
      }
    }

    fetchProdutos(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) return <div className="loader"></div>;
  if (error) console.log(error);
  if (produto)
    return (
      <div className={styles.produto}>
        <Head
          title={produto.nome}
          description={`${produto.nome} é o meu produto`}
        />
        <div>
          {produto.fotos &&
            produto.fotos.map((foto) => (
              <img key={foto.titulo} src={foto.src} alt={produto.id} />
            ))}
        </div>

        <div className={styles.dados}>
          <h1>{produto.nome}</h1>
          <span>R$ {produto.preco}</span>
          <p>{produto.descricao}</p>
        </div>
      </div>
    );
};

export default Produto;
