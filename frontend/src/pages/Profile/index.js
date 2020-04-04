import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import './styles.css';


function Profile () {
    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero"/>
                <span>Bem vinda, APAD</span>

                <Link className="button" to="/incident/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#e02041" />
                </button>
            </header> 

            <h1>Casos Cadastrado</h1>

            <ul>
                <li>
                    <strong>Caso:</strong>
                    <p>teste</p>
                    <strong>Descrição:</strong>
                    <p>alguma descrição do caso</p>
                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>Caso:</strong>
                    <p>teste</p>
                    <strong>Descrição:</strong>
                    <p>alguma descrição do caso</p>
                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>Caso:</strong>
                    <p>teste</p>
                    <strong>Descrição:</strong>
                    <p>alguma descrição do caso</p>
                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>Caso:</strong>
                    <p>teste</p>
                    <strong>Descrição:</strong>
                    <p>alguma descrição do caso</p>
                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Profile;