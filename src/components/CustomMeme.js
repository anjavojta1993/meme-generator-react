function CustomMeme({ customMeme, handleChangeCustomMeme }) {
  return (
    <img
      className="meme"
      src={customMeme}
      onChange={handleChangeCustomMeme}
      alt="This is your custom meme"
    />
  );
}

export default CustomMeme;
