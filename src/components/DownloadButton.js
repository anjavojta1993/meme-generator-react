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
  function forceDownload(blob, filename) {
    // Create an invisible anchor element
    const anchor = document.createElement('a');
    anchor.style.display = 'none';
    anchor.href = window.URL.createObjectURL(blob);
    anchor.setAttribute('download', filename);
    document.body.appendChild(anchor);

    // Trigger the download by simulating click
    anchor.click();

    // Clean up
    window.URL.revokeObjectURL(anchor.href);
    document.body.removeChild(anchor);
  }

  function download(url, filename) {
    // If no filename is set, use filename from URL
    if (!filename) filename = url.match(/\/([^/#?]+)[^/]*$/)[1];

    fetch(url, {
      headers: new Headers({
        Origin: window.location.origin,
      }),
      mode: 'cors',
    })
      .then((response) => response.blob())
      .then((blob) => forceDownload(blob, filename))
      .catch((e) => console.error(e));
  }
  return (
    <button css={button} href={customMeme} onClick={() => download(customMeme)}>
      Download meme
    </button>
  );
}

export default DownloadButton;
