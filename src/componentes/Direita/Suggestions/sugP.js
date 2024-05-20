
import PeopleSuggestion from "./pSug"
import './InfoPeople.css'


var ListaSugestoes = [
    {
        SuggestionImgPerfil: "https://conteudo.imguol.com.br/c/esporte/eb/2023/05/29/o-surfista-gabriel-medina-durante-a-etapa-de-surf-ranch-pro-na-california-eua-1685329431697_v2_450x450.jpg",
        SuggestionAtPerfil : "Gabriel",
        SuggestionNamePerfil: "Medin_A"
    },
    {
        SuggestionImgPerfil: "https://media.rnztools.nz/rnz/image/upload/s--HlU-VW5h--/c_scale,f_auto,q_auto,w_1050/v1643422776/4P60MS2_copyright_image_52785",
        SuggestionAtPerfil :"CARROLL",
        SuggestionNamePerfil: "TOM"
    },
    {
        SuggestionImgPerfil: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWS7kr1eRUs2pMNsp6vzfbd8sVLK2waJEq9uW2KUV0weKe2yd_",
        SuggestionAtPerfil :"Mick",
        SuggestionNamePerfil: "FANNING"
    },
    {
        SuggestionImgPerfil: "https://i.pinimg.com/originals/77/64/e8/7764e8ecb89ca1b8e33a718c7a1b9e0c.jpg",
        SuggestionAtPerfil :"JOHN",
        SuggestionNamePerfil: "JOHNJ_"

    }

]

export default function InfoPeoples() {
    return (
    <div className="InfoPeoples">
        {ListaSugestoes.map((suggestion) => {
            return <PeopleSuggestion 
                sugestaoCaminhoDaImagem={suggestion.SuggestionImgPerfil} 
                sugestaoNomeUsuario={suggestion.SuggestionNamePerfil} 
                sugestaoAtPerfil={suggestion.SuggestionAtPerfil} 
            />
        })
        }
    </div>
    )
}