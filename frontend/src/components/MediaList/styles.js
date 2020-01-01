import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 50px;

  svg {
    color: #000;
    background: transparent;
  }

  img {
    max-height: 700px;
    max-width: 600px;
    width: auto;
    height: auto;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      background: transparent;
    }

    div {
      display: flex;
      flex-direction: column;

      strong {
        margin-bottom: 5px;
      }

      aside {
        margin-top: 5px;
        display: flex;
        align-items: center;

        span {
          margin-left: 4px;
          margin-right: 15px;
          font-size: 16px;
        }
      }
    }
  }
`;
