import styled from 'styled-components';

export const Container = styled.div`
  margin: 5px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;

  border-bottom: 1px solid #ccc;
  img {
    width: 300px;
  }

  form {
    display: flex;
    flex-direction: column;

    button {
      background: #3897f0;
      border-radius: 4px;
      margin-top: 5px;
      padding: 5px 0 5px;
    }

    input {
      display: none;
    }

    label {
      cursor: pointer;
    }
  }
`;
