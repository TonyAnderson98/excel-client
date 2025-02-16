import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ModuloDetalhes.css";
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
        <div className="modulo-detalhes">
            <button onClick={() => navigate("/")} className="voltar-button">
                Voltar para Módulos
            </button>
            <h1 className={styles.moduloTitulo}>{modulo.titulo}</h1>
            <ul className="card_aula">
                {aulas.map((aula) => (
                    <li key={aula._id}>
                        <div className="aula-capa">
                            <img src={aula.imagemCapa} alt={aula.titulo} />
                        </div>
                        <div className="aula-body">
                            <h3 className="aula-titulo">{aula.titulo}</h3>
                            <span className="aula-descricao">
                                {aula.descricao}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ModuloDetalhes;
