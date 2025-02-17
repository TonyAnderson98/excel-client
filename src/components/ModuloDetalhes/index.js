import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom"; // Adicione o Link
import axios from "axios";
import styles from "./modulodetalhes.module.css";

const ModuloDetalhes = () => {
    const { id } = useParams(); // Pega o ID do módulo da URL
    const navigate = useNavigate(); // Para navegar de volta à lista de módulos
    const [aulas, setAulas] = useState([]);
    const [modulo, setModulo] = useState(null);

    useEffect(() => {
        // Busca os detalhes do módulo
        axios
            .get(`${process.env.REACT_APP_API_URL}/api/modulos/${id}`)
            .then((response) => {
                setModulo(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar detalhes do módulo:", error);
            });

        // Busca as aulas do módulo
        axios
            .get(`${process.env.REACT_APP_API_URL}/api/modulos/${id}/aulas`)
            .then((response) => {
                setAulas(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar aulas do módulo:", error);
            });
    }, [id]);

    if (!modulo) {
        return <div>Carregando...</div>; // Exibe uma mensagem enquanto os dados são carregados
    }

    return (
        <div className={styles.moduloDetalhes}>
            <button
                onClick={() => navigate("/")}
                className={styles.voltarButton}
            >
                Voltar para Módulos
            </button>
            <h1 className={styles.moduloTitulo}>{modulo.titulo}</h1>
            <ul className={styles.cardsAulaContainer}>
                {aulas.map((aula) => (
                    <li key={aula._id}>
                        <Link
                            to={`/aula/${aula._id}`}
                            className={styles.aulaLink}
                        >
                            <div className={styles.cardAula}>
                                <div className={styles.aulaCapa}>
                                    <img
                                        src={`https://img.youtube.com/vi/${aula.videoId}/sddefault.jpg`}
                                        alt={aula.titulo}
                                    />
                                </div>
                                <div className={styles.aulaBody}>
                                    <h3 className={styles.aulaTitulo}>
                                        {aula.titulo}
                                    </h3>
                                    <span className={styles.aulaDescricao}>
                                        {aula.descricao}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ModuloDetalhes;
