/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';

import { FaRegHeart, FaRegComment } from 'react-icons/fa';
import { Container } from './styles';

export default function MediaList({ files }) {
  return (
    <Container>
      {files.map(file => (
        <li key={file.id || file._id}>
          <div>
            <strong>{file.author}</strong>
            <img src={file.preview || file.url} alt={file.name} />
            <aside>
              <button type="button" onClick={() => {}}>
                <FaRegHeart size={18} />
              </button>
              <span>11</span>
              <button type="button" onClick={() => {}}>
                <FaRegComment size={18} />
              </button>
            </aside>
            {/* <span>{file.description}</span> */}
          </div>
        </li>
      ))}
    </Container>
  );
}
