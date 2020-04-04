import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'
import './styles.css';

function NewIncident() {
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

                <form>
                    <input placeholder="Titulo do caso"/>
                    <textarea placeholder="Descreva o caso..."/>
                    <input placeholder="Valor em Reais"/>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
};

export default NewIncident;