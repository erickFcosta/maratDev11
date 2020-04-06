import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import api from '../../services/api';
import logoImg from '../../assets/logo.svg';
import './styles.css';

function NewIncident() {
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title, 
            description,
            value
        };
        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            });
            history.push('/profile');
        } catch (error) {
            alert('erro ao cadastrar caso, tente novamente.');
        }
    };

    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um heroi apto para resolve-lo</p>

                    <Link className="back-link" to="/profile" >
                        <FiArrowLeft size={16} color="#e02041" />
                        Voltar para o inicio.
                    </Link>
                </section>

                <form onSubmit={ handleNewIncident }>
                    <input 
                        placeholder="Titulo do caso"
                        value={ title }
                        onChange={e => setTitle(e.target.value)} />
                    <textarea 
                        placeholder="Descreva o caso..."
                        value={ description }
                        onChange={e => setDescription(e.target.value)} />
                    <input 
                        placeholder="Valor em Reais"
                        value={ value }
                        onChange={e => setValue(e.target.value)} />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
};

export default NewIncident;