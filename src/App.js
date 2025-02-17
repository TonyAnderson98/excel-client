import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Modulo from "./components/Modulo";
import ModuloDetalhes from "./components/ModuloDetalhes";
import AulaDetalhes from "./components/AulaDetalhes"; // Importe o novo componente
import "./App.css";

function App() {
    const [modulos, setModulos] = useState([]);

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/api/modulos`)
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
                <Routes>
                    {/* Rota para a lista de módulos */}
                    <Route
                        path="/"
                        element={
                            <div className="modulos-container">
                                {modulos.map((modulo) => (
                                    <Link
                                        to={`/modulo/${modulo._id}`}
                                        key={modulo._id}
                                    >
                                        <Modulo modulo={modulo} />
                                    </Link>
                                ))}
                            </div>
                        }
                    />
                    {/* Rota para os detalhes do módulo */}
                    <Route path="/modulo/:id" element={<ModuloDetalhes />} />
                    {/* Rota para os detalhes da aula */}
                    <Route path="/aula/:id" element={<AulaDetalhes />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
