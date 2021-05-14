function CustomMeme({ customMeme, handleChangeCustomMeme }) {
  return (
    <img
      src={customMeme}
      onChange={handleChangeCustomMeme}
      alt="This is your custom meme"
      maximum-width="400px"
      maximum-height="400px"
    />
  );
}

export default CustomMeme;
