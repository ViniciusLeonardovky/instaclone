import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #eee;

  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    /* margin-top: -80px; */
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: column;

    img {
      width: 300px;
    }

    input {
      margin-top: 20px;
      border: 1px solid #ddd;
      border-radius: 4px;
      height: 48px;
      padding: 0 20px;
      font-size: 16px;
    }

    button {
      margin-top: 5px;
      color: #fff;
      height: 48px;
      border: 1px solid transparent;
      border-radius: 4px;
      background-color: #3897f0;
      box-sizing: border-box;
      cursor: pointer;
      display: block;
      font-weight: 600;
      padding: 5px 9px;
      text-align: center;
      text-transform: inherit;
      text-overflow: ellipsis;
      user-select: none;
      font-size: 16px;
      line-height: 18px;
      width: auto;

      &:hover {
        background-color: ${darken(0.05, '#3897f0')};
      }
    }
  }
`;
