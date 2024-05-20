import { useState } from "react";

import './Post.css';
import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";






import { FiMoreHorizontal } from "react-icons/fi";

import { VscHeart } from "react-icons/vsc";
import { VscHeartFilled } from "react-icons/vsc";

import { BsChat } from "react-icons/bs";

import { FiSend } from "react-icons/fi";

import { BsBookmark } from "react-icons/bs";
import { BsBookmarkStarFill } from "react-icons/bs";


import { BsEmojiWink } from "react-icons/bs";

export default function Post(props) {

const [liked, setLiked] = useState(false);
const [likes, setLikes] = useState(props.initialLikes);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(likes % 2 === 0 ? 'black' : 'red');
  };

  return (
    <div className="card Post">
      <header>
        <div className="card-header">
        <img src={props.imgPerfil} alt="" className="" />
                <div className="conteudoHeaderPost">
                    <h5>{props.nomeUsuario}</h5>
                <p>{props.descricao}</p>
            </div>
        </div>
      </header>

      <div className="card-body">
        <img src={props.imgSrc} alt="Imagem" />

        <div className="card-footer">
          <div className="icons-1">
            {liked ? (
              <VscHeartFilled
                onClick={toggleLike}
                style={{ color: "red", cursor: "pointer" }}
              />
            ) : (
              <VscHeart
                onClick={toggleLike}
                style={{ cursor: "pointer" }}
              />
            )}

            <BsChat/>
            <FiSend/>
          </div>
        </div>


                
        <div className="legend">
          <p>
            <strong>{props.title}</strong> {props.body}
          </p>
        </div>

        <div className="traductor">
          <p>Ver tradução</p>
        </div>

        <div className="comments">
          <p>Ver todos os {props.quantComments} comentários</p>
          <div className="fake-comment">
            <input placeholder="Adicione um comentário..." />
            <BsEmojiWink className="Emoji"/>
          </div>
          <div className="horizontal-line"></div>
        </div>
      </div>
    </div>
  );
}