import '../App.css';

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
    <div className="Inputs">
      <label htmlFor="character">
        Enter a character:
        <input
          className="userInput"
          type="text"
          id="character"
          placeholder="e.g. saltbae"
          value={image}
          onChange={handleChangeImage}
        />
      </label>
      <br />

      <label htmlFor="top-text">
        Enter a top text:
        <input
          className="userInput"
          type="text"
          id="top-text"
          placeholder="e.g. Let me"
          value={topText}
          onChange={handleChangeTopText}
        />
      </label>
      <br />
      <label htmlFor="bottom-text">
        Enter a bottom text:
        <input
          className="userInput"
          type="text"
          id="bottom-text"
          placeholder="e.g. Salt you"
          value={bottomText}
          onChange={handleChangeBottomText}
        />
      </label>
    </div>
  );
}

export default Inputs;
