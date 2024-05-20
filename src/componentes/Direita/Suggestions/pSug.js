// Suggestions for you
export default function PeopleSuggestion (props) {
    return (
        <div className="PeopleSuggestion">
            <div className="suggestion-imagem-perfil">
                <img src={props.sugestaoCaminhoDaImagem} alt="Sugestões"/>
            </div>

            <main className="sugestaoInformacaoGenerica">
                <div className="suggestion-usuario">
                    <p className="suggestion-nome-usuario">{props.sugestaoNomeUsuario}</p>
                    <p className="suggestion-at-usuario">{props.sugestaoAtPerfil}</p>
                </div>
            </main>
            <p className="follow"> Seguir </p>
        </div>
    )
}