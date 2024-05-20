// Stories.js

import React from 'react';
import Story from "./Story";
import './Stories.css';

const listaUsuarios = [
    {
        nome: "Pin",
        url: "https://thispersondoesnotexist.com/",
        imagemDeFundo: "https://img.freepik.com/fotos-gratis/surfista-na-onda-do-oceano-azul-sendo-barreado_654080-552.jpg?t=st=1716203764~exp=1716207364~hmac=160a8a6857f1dbfda3ad1d41de6c79ad14df5df470b73329898b91fffd1cb2ad&w=740"
    },
    {
        nome: "Pipe",
        url: "https://img.freepik.com/fotos-gratis/mulher-com-surfboard-praia_23-2148000916.jpg?t=st=1716204493~exp=1716208093~hmac=ed94f7cd9f0e003664a6bb0a2766e227b53fd689f9ff1bc25f960b41debc14c1&w=740",
        imagemDeFundo: "https://img.freepik.com/fotos-gratis/girassol-vibrante-na-beleza-dourada-da-natureza-do-prado-gerada-pela-ia_24640-81413.jpg?t=st=1716204157~exp=1716207757~hmac=3eb29429bff00913bc0c5bd812cdb9a10ce634b0b711b65ddb619ab909f32c53&w=826" 
    },
   
    {
        nome: "Dorly",
        url: "https://img.freepik.com/fotos-gratis/pescador-barbudo-com-anoraque-amarelo-e-chapeu-vermelho-segurando-peixes-enormes-nas-maos-demonstrando-seu-sucesso-na-captura-retrato-horizontal-de-trabalhador-habilidoso-posando-com-salmao-grande-na-parede-azul_273609-8093.jpg?t=st=1716204640~exp=1716208240~hmac=a3c6cad8c3c3dd0ede184fde2f56a85c52edd6b5fe211b12068dd8dd2b70ffb8&w=740",
        imagemDeFundo: "https://img.freepik.com/fotos-gratis/pesca-do-homem-em-um-lago_1004-12.jpg?t=st=1716203857~exp=1716207457~hmac=9204b068244c52a4ae7d20cca6510b7dcded969a9c130a0c1c94f1afda77fdee&w=740"
    },
    {
        nome: "fiNe",
        url: "https://img.freepik.com/fotos-gratis/surfista-com-uma-prancha-saindo-do-mar-durante-o-por-do-sol_181624-41863.jpg?t=st=1716204585~exp=1716208185~hmac=ae34ddcd3e7b92d9b010e4913471278b4f3b1ac13412c450168f66c83a827362&w=360",
        imagemDeFundo: "https://img.freepik.com/fotos-gratis/cao-bonito-vista-frontal-com-casaco_23-2148423628.jpg?t=st=1716203927~exp=1716207527~hmac=8de3f983030e8431ef147152039a593c408f0d3ae1ac3bfcc1c210b16da25eba&w=360"
    },
    {
        nome: "Sun",
        url: "https://img.freepik.com/fotos-gratis/close-de-um-homem-segurando-a-biblia-com-um-fundo-desfocado-em-preto-e-branco_181624-20323.jpg?t=st=1716205648~exp=1716209248~hmac=d6c2263df295cc3c050adf6240cd1968e488ab622d4dc97a03f27d4a530265e4&w=740",
        imagemDeFundo: "https://img.freepik.com/fotos-gratis/fundo-de-planta-de-casa-verde-para-amantes-de-plantas_53876-128849.jpg?t=st=1716203899~exp=1716207499~hmac=5ff639c90584898b8b7e224848cdb6d66109a3c23a0690a338dab1c34a9df39a&w=740"
    }
];

export default function Stories() {
    return (
        <div className="Stories">
            {listaUsuarios.map((usuario, index) => (
                <Story
                    key={index}
                    nomeUsuario={usuario.nome}
                    caminhoDaImagem={usuario.url}
                    imagemDeFundo={usuario.imagemDeFundo}
                />
            ))}
        </div>
    );
}
