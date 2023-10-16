import React from 'react'
import './NewPost.css'
import blogFetch from "../axios/config";

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewPost = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const creatPost = async (e) => {
    e.preventDefault();

    const post = { title, body, userId:1 };

    await blogFetch.post('/posts', post,{
      body:post,
    });

    navigate("/");
  }

  return (
    <div className='newPost'>
      <h2>Inserir novo Post</h2>
      <form onSubmit={(e) => creatPost(e)}>
        <div className="formControl">
          <label htmlFor="title">Titulo:</label>
          <input type="text" name="title" id="tittle" placeholder="Digite o titulo" 
          onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="formControl">
          <label htmlFor="body">Conteúdo:</label>
          <textarea name='body' id='body' placeholder='Digite o conteúdo'></textarea>
          <input type="submit" value="Criar post" className="btn"
          onChange={e => setBody(e.target.value)} 
          />
        </div>
      </form>
    </div>
  )
}

export default NewPost