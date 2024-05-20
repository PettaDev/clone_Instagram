
import React from 'react';
import './Stories.css';

export default function Story(props) {
    return (
        <div className="Story" style={{backgroundImage: `url(${props.imagemDeFundo})`}}>
            <div className="imagem-perfil">
                <img src={props.caminhoDaImagem} alt="Imagem do Story" className="imagem-story"/>
            </div>
            <div className="nome-usuario">
                <p>{props.nomeUsuario}</p>
            </div>
        </div>
    )
}
