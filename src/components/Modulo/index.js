import React from "react";
import "./modulo.css"; // Importe o CSS

const Modulo = ({ modulo }) => {
    return (
        <div className="modulo-card">
            <h2 className="modulo-titulo">{modulo.titulo}</h2>
            <p className="modulo-descricao">
                Número do Módulo: {modulo.modulo_number}
            </p>
            <div className="modulo-aulas">
                <h3>Aulas:</h3>
                <ul>
                    {modulo.aulas.map((aula, index) => (
                        <li key={index}>{aula}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Modulo;
