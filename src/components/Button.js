/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// CSS-in-JS
const button = css`
  margin-bottom: 1rem;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  font-size: 20px;
  width: 150px;
  height: 50px;
  font-family: 'Montserrat', sans-serif;
`;

function Button({ image, handleChangeCustomMeme, templates }) {
  return (
    <button
      css={button}
      onClick={() => {
        if (templates.find((object) => object.id === image)) {
          handleChangeCustomMeme();
        } else {
          alert('Your character does not exist. Please choose another one.');
        }
      }}
    >
      Create Meme
    </button>
  );
}

export default Button;
