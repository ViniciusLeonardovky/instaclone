/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';

import { FaRegHeart } from 'react-icons/fa';
import { Container } from './styles';

// import media from '../../components/Media';

import api from '../../services/api';

export default function Timeline() {
  const [medias, setMedias] = useState([{}]);

  useEffect(() => {
    async function loadMedias() {
      const response = await api.get('timeline');

      setMedias(response.data);
    }
    loadMedias();
  }, []);

  return (
    <Container>
      <header>header</header>
      <ul>
        {medias.map(media => (
          <li key={media._id}>
            <strong>{media.author}</strong>
            <img src={media.url} alt="" />
            <button type="button" onClick={() => {}}>
              <FaRegHeart size={32} /> 11
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
}
