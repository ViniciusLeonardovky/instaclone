/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';

import { FaInstagram } from 'react-icons/fa';
import { Container } from './styles';

import api from '../../services/api';

import logo from '../../assets/logo.svg';

export default function Media() {
  const [file, setFile] = useState(null);

  async function fileUpload(data) {
    const formData = new FormData();

    formData.append('file', data.file);
    formData.append('author', localStorage.getItem('@Instaclone:username'));
    formData.append('description', '');

    const response = await api.post('/medias', formData, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    });

    return response;
  }

  function onFormSubmit(e) {
    e.preventDefault();
    fileUpload(file);
  }

  function onChange(e) {
    setFile({ file: e.target.files[0] });
  }

  return (
    <Container>
      <FaInstagram size={54} />
      <img src={logo} alt="Instaclone" />
      <form onSubmit={onFormSubmit}>
        <input type="file" name="Imagem" onChange={onChange} />
        <button type="submit">Upload</button>
      </form>
    </Container>
  );
}
