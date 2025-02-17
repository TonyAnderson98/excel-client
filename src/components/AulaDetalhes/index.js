import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./auladetalhes.module.css";

const AulaDetalhes = () => {
    const { id } = useParams(); // Pega o ID da aula da URL
    const navigate = useNavigate(); // Para navegar de volta aos detalhes do módulo
    const [aula, setAula] = useState(null);

    useEffect(() => {
        // Busca os detalhes da aula
        axios
            .get(`${process.env.REACT_APP_API_URL}/api/aulas/${id}`)
            .then((response) => {
                setAula(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar detalhes da aula:", error);
            });
    }, [id]);

    if (!aula) {
        return <div>Carregando...</div>; // Exibe uma mensagem enquanto os dados são carregados
    }

    return (
        <div className={styles.aulaDetalhes}>
            <button
                onClick={() => navigate(-1)} // Volta para a página anterior
                className={styles.voltarButton}
            >
                Voltar
            </button>
            <h1 className={styles.aulaTitulo}>{aula.titulo}</h1>
            <div className={styles.videoContainer}>
                <iframe
                    src={`https://www.youtube.com/embed/${aula.videoId}`} // URL do vídeo da aula
                    title={aula.titulo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <p className={styles.aulaDescricao}>{aula.descricao}</p>
        </div>
    );
};

export default AulaDetalhes;
