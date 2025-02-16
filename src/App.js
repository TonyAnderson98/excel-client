import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Importe o React Router
import Modulo from "./components/Modulo";
import ModuloDetalhes from "./components/ModuloDetalhes"; // Criaremos este componente depois
import "./App.css";

function App() {
    const [modulos, setModulos] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/modulos")
            .then((response) => {
                setModulos(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar módulos:", error);
            });
    }, []);

    return (
        <Router>
            <div className="App">
                <h1>Módulos</h1>
                <div className="modulos-container">
                    {modulos.map((modulo) => (
                        <Link to={`/modulo/${modulo._id}`} key={modulo._id}>
                            <Modulo modulo={modulo} />
                        </Link>
                    ))}
                </div>

                {/* Configuração das rotas */}
                <Routes>
                    <Route path="/modulo/:id" element={<ModuloDetalhes />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
