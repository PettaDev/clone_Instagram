import './ConteudoLateralDireita.css';
import SuggestionPerfil from './Perfil/Trocar';
import InfoPeoples from './Suggestions/sugP';

export default function ConteudoLateralEsquerda() {
    return (
        <div className='ConteudoLateralDireita'>
            
            <SuggestionPerfil />
            <InfoPeoples />
            <footer>
                <p className='detalhes'>© 2024 </p>
                <p>Feito por <a href="https://github.com/PettaDev" target="_blank" rel="noreferrer" >GUSTAVO PETTA</a> </p>
            </footer>

        </div>
    )
}
