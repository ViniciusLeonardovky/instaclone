/* eslint-disable react/prop-types */
import React from 'react';

import { FaRegHeart } from 'react-icons/fa';
import { Container } from './styles';

export default function MediaList({ files }) {
  return (
    <Container>
      {files.map(file => (
        <li key={file.id}>
          <div>
            <strong>{file.author}</strong>
            <img src={file.preview} alt={file.name} />
            <aside>
              <button type="button" onClick={() => {}}>
                <FaRegHeart size={24} />
              </button>
              <span>11</span>
            </aside>
            {/* <span>{file.description}</span> */}
            <button type="button">Ver comentários</button>
          </div>
        </li>
      ))}
    </Container>
  );
}
