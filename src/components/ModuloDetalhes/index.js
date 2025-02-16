import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ModuloDetalhes.css";

const ModuloDetalhes = () => {
    const { id } = useParams(); // Pega o ID do módulo da URL
    const navigate = useNavigate(); // Para navegar de volta à lista de módulos
    const [aulas, setAulas] = useState([]);
    const [modulo, setModulo] = useState(null);

    useEffect(() => {
        // Busca os detalhes do módulo
        axios
            .get(`http://localhost:5000/api/modulos/${id}`)
            .then((response) => {
                setModulo(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar detalhes do módulo:", error);
            });

        // Busca as aulas do módulo
        axios
            .get(`http://localhost:5000/api/modulos/${id}/aulas`)
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
            <h1>{modulo.titulo}</h1>
            <p>Número do Módulo: {modulo.modulo_number}</p>
            <h2>Aulas:</h2>
            <ul className="cards_aula">
                {aulas.map((aula) => (
                    <li key={aula._id}>
                        <h3>{aula.titulo}</h3>
                        <p>{aula.descricao}</p>
                        <img src={aula.imagemCapa} alt={aula.titulo} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ModuloDetalhes;
