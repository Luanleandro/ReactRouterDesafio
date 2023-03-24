import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Produtos.module.css';
import Head from './Head';

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProdutos(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProdutos(json);
        setLoading(false);
      } catch (erro) {
        setError(`Ocorreu um erro: ${erro}`);
      } finally {
        setLoading(false);
      }
    }

    fetchProdutos('https://ranekapi.origamid.dev/json/api/produto');
  }, []);

  if (error) return <p>{error}</p>;
  if (loading) return <div className="loader"></div>;

  return (
    <div className={styles.produtos + ' animeLeft'}>
      <Head title="Produtos" description="Essa é a minha pagina de produtos" />
      {produtos.map((produto) => (
        <div key={produto.id}>
          <Link to={`produtos/${produto.id}`}>
            <img src={produto.fotos[0].src} alt={produto.id} />
            <h1>{produto.nome}</h1>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Produtos;
