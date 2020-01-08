import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;

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
    margin-top: 50px;

    &:last-child {
      margin-bottom: 50px;
    }

    button {
      background: transparent;
    }

    div {
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid #ccc;

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

export const customStylesModal = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
