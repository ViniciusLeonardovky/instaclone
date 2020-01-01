/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState, useMemo } from 'react';

import socketio from 'socket.io-client';
import { Container } from './styles';

import Header from '../../components/Header';
import MediaList from '../../components/MediaList';

import api from '../../services/api';

export default function Timeline() {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const socket = useMemo(() => socketio('http://localhost:3333'), []);

  useEffect(() => {
    socket.on('media', data => {
      setUploadedFiles([...uploadedFiles, data]);
      console.log(data);
    });
  }, [uploadedFiles, socket]);

  useEffect(() => {
    async function loadMedias() {
      const response = await api.get('medias');

      setUploadedFiles(
        response.data.map(file => ({
          id: file._id,
          name: file.name,
          author: file.author,
          description: file.description,
          preview: file.url,
          uploaded: true,
          url: file.url,
        }))
      );
    }
    loadMedias();
  }, []);

  return (
    <Container>
      <Header onUpload={() => {}} />
      <MediaList files={uploadedFiles} />
    </Container>
  );
}
