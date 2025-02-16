import React from "react";
import "./modulo.css";
import styles from "./styles.module.css";

const Modulo = ({ modulo }) => {
    return (
        <div
            className="modulo-card"
            style={{ backgroundImage: `url(${modulo.modulo_capa})` }}
        >
            <h2 className={styles.moduloTitulo}>{modulo.titulo}</h2>
        </div>
    );
};

export default Modulo;
