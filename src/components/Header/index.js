import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css"; // CSS específico para o Header

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <Link to="/" className={styles.logoLink}>
                    <img
                        src="/logo.png" // Substitua pelo caminho da sua logo
                        alt="Logo do Site"
                        className={styles.logo}
                    />
                </Link>
            </div>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <Link to="/" className={styles.navLink}>
                            Início
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to="/modulos" className={styles.navLink}>
                            Módulos
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to="/sobre" className={styles.navLink}>
                            Sobre
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
