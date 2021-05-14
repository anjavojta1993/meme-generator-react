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

function DownloadButton({ customMeme }) {
  const download = (e) => {
    console.log(e.target.href);
    fetch(e.target.href, {
      method: 'GET',
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const element = document.createElement('a');
          element.href = url;
          element.setAttribute('download', 'image.png');
          document.body.appendChild(element);
          element.click();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <button
      css={button}
      href={customMeme}
      download
      onClick={(e) => download(e)}
    >
      Download meme
    </button>
  );
}

export default DownloadButton;
