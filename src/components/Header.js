import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext'; // Atualize o caminho conforme necessário
import '../styles/Header.css';

export default function Header() {
    const { user, setUser } = useUser();
    const [showDropdown, setShowDropdown] = useState(false);

    const handleLogout = () => {
        setUser(null); // Limpa o estado do usuário e remove do localStorage
        window.location.href = '/'; // Redireciona para a página de login
    };

    return (
        <nav className="navbar d-flex justify-content-end custom-navbar navbar-expand-lg navbar-dark">
            <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="container-fluid">
                <div className="collapse navbar-collapse justify-content-md-end justify-content-xl-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item align-self-center">
                            <a className="nav-link active" aria-current="page" href="#">
                                QUEM SOMOS
                            </a>
                        </li>
                        <li className="nav-item align-self-center">
                            <a className="nav-link" href="#">
                                INICIO
                            </a>
                        </li>
                        <li className="nav-item align-self-center">
                            {user ? (
                                <div className="dropdown">
                                    <img
                                        src={user.profile_picture} // Atualize o campo conforme necessário
                                        alt="Profile"
                                        className="rounded-circle dropdown-toggle"
                                        style={{ width: '40px', height: '40px' }}
                                        onClick={() => setShowDropdown(!showDropdown)}
                                    />
                                    {showDropdown && (
                                        <div className="dropdown-menu">
                                            <button className="dropdown-item" onClick={handleLogout}>
                                                Sair
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link className="nav-link" to="/login">ENTRAR</Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
