function Inputs({
  image,
  topText,
  bottomText,
  setTopText,
  setBottomText,
  setImage,
}) {
  function handleChangeTopText(event) {
    setTopText(event.currentTarget.value);
  }

  function handleChangeBottomText(event) {
    setBottomText(event.currentTarget.value);
  }

  function handleChangeImage(event) {
    setImage(event.currentTarget.value);
  }

  return (
    <>
      <label htmlFor="character">
        Enter a character:
        <input
          type="text"
          id="character"
          value={image}
          onChange={handleChangeImage}
        />
      </label>
      <br />

      <label htmlFor="top-text">
        Enter a top text:
        <input
          type="text"
          id="top-text"
          value={topText}
          onChange={handleChangeTopText}
        />
      </label>
      <br />
      <label htmlFor="bottom-text">
        Enter a bottom text:
        <input
          type="text"
          id="bottom-text"
          value={bottomText}
          onChange={handleChangeBottomText}
        />
      </label>
    </>
  );
}

export default Inputs;
