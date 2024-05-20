import './Feed.css';

import Post from './Post/Post';

export default function Feed() {
    return (
        <div className="Feed">
            <Post
                imgPerfil="https://thispersondoesnotexist.com/"
                nomeUsuario="Pin"
                descricao="Guaruja, SP"
                imgSrc="https://img.freepik.com/fotos-premium/uma-ilustracao-gerada-por-ia-de-um-homem-montando-uma-prancha-de-surf-em-uma-onda-ao-por-do-sol_665346-37580.jpg?w=740"
                body="Um dia incrível e inesquecível - fotografia feita por: @Gustavo_Petta." />
            <Post
                imgPerfil="https://img.freepik.com/fotos-gratis/close-de-um-homem-segurando-a-biblia-com-um-fundo-desfocado-em-preto-e-branco_181624-20323.jpg?t=st=1716205648~exp=1716209248~hmac=d6c2263df295cc3c050adf6240cd1968e488ab622d4dc97a03f27d4a530265e4&w=740"
                descricao="São Paulo, SP"
                nomeUsuario="Sun"
                imgSrc="https://a-static.mlcdn.com.br/450x450/livro-a-hora-da-estrela/magazineluiza/227488200/3496de9aa86e8ad36b4dc270477c5018.png"
                body="Um lindo livro para se ler antes de dormir, A hora da estrela - Clarice Lispector " />
        </div>
    )
}