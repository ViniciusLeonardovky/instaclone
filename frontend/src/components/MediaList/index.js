/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { FaRegHeart, FaRegComment } from 'react-icons/fa';
import Modal from 'react-modal';

import api from '../../services/api';

import { Container, customStylesModal } from './styles';

export default function MediaList({ files }) {
  const [comments, setComments] = useState([]);
  const [commentModal, setCommentModal] = useState(false);

  async function handleShowComment(id) {
    Modal.setAppElement('body');
    const response = await api.get(`comments/${id}`);

    const { comments: commentsResponse, author } = response.data;

    console.log(commentsResponse, author);
    setComments(response.data);
    // setComments(questionAnswer.answer);

    setCommentModal(true);
  }

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
              <button type="button" onClick={() => handleShowComment(file.id)}>
                <FaRegComment size={18} />
              </button>
            </aside>
            {/* <span>{file.description}</span> */}
          </div>
          <Modal
            isOpen={commentModal}
            onRequestClose={() => setCommentModal(false)}
            style={customStylesModal}
            contentLabel="Delete question"
          >
            <ul>
              {comments.map(comment => (
                <div>
                  <li>maneiro</li>
                  <li>maneiro</li>
                  <li>maneiro</li>
                  <li>maneiro</li>
                  <li>maneiro</li>
                </div>
              ))}
            </ul>
          </Modal>
        </li>
      ))}
    </Container>
  );
}
