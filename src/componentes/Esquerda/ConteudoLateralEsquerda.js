import logo from '../../imagens/images.png';
import Menu from '../../TextMenu';
import './ConteudoLateralEsquerda.css';

import { GoHomeFill } from "react-icons/go";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";


import { TiHeartOutline } from "react-icons/ti";
import { MdOutlineExplore } from "react-icons/md";

import { BsPlusSquare } from "react-icons/bs";
import { MdPerson3 } from "react-icons/md";



export default function ConteudoLateralEsquerda() {
    return (
        <div className='conteudoLateralEsquerda'>
            <img className='imagemInstagram' src={logo} alt='Logo' />

            <ul>
                <strong>
                <Menu nome="Home" icone={<GoHomeFill />}/>
                </strong>
                <Menu nome="Pesquisar" icone= {<FaMagnifyingGlass />}/>
                <Menu nome="Explorar" icone= {<MdOutlineExplore />}/>
                <Menu nome="Mensagens" icone= {<IoIosSend />}/>
                <Menu nome="Notificação" icone= {<TiHeartOutline />}/>
                <Menu nome="Criar" icone= {<BsPlusSquare />}/>

        <div className='icone_perfil'>
                <Menu nome="Perfil" icone= {<MdPerson3 />} style={{ transition: 'transform 0.3s ease-in-out', cursor: 'pointer' }}/>
            
            </div>

            </ul>

        </div>
    )
}

// export default ConteudoLateralEsquerda;