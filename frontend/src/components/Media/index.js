import React from 'react';

import { FaRegHeart } from 'react-icons/fa';
import { Container } from './styles';
import profile from '../../assets/profile.jpg';

export default function Media() {
  return (
    <Container>
      <strong>Sioux</strong>
      <img src={profile} alt="" />
      <button type="button" onClick={() => {}}>
        <FaRegHeart size={32} /> 11
      </button>
    </Container>
  );
}
