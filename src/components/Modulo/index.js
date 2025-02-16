import React from "react";
import "./modulo.css";

const Modulo = ({ modulo }) => {
    return (
        <div className="modulo-card">
            <h2 className="modulo-titulo">{modulo.titulo}</h2>
            <p className="modulo-descricao">
                Número do Módulo: {modulo.modulo_number}
            </p>
        </div>
    );
};

export default Modulo;
