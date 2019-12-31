/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Container } from './styles';
import logo from '../../assets/logo.svg';

export default function Home({ history }) {
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!username.length) return;

    localStorage.setItem('@Instaclone:username', username);

    history.push('/timeline');
  }

  function handleInputChange(e) {
    setUsername(e.target.value);
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="Instagram" />
        <input
          type="text"
          placeholder="Nome de usuário"
          maxLength="15"
          value={username}
          onChange={handleInputChange}
        />
        <button type="submit">Entrar</button>
      </form>
    </Container>
  );
}
