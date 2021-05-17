import './App.css';
import { useEffect, useState } from 'react';
import Button from './components/Button';
import CustomMeme from './components/CustomMeme';
import DownloadButton from './components/DownloadButton';
import Inputs from './components/Inputs';

function App() {
  // create App component
  const [image, setImage] = useState(''); // declare variable for setting the type of character e.g. bender
  const [topText, setTopText] = useState(''); // declare variable for setting the toptext
  const [bottomText, setBottomText] = useState(''); // declare variable for setting the bottomtext
  const [customMeme, setCustomMeme] = useState(
    'https://api.memegen.link/images/saltbae/Let_me/salt_you.png', // declare variable for changing the URL for picture display
  );
  const [templates, setTemplates] = useState([]); // declare empty array to later save objects from templates site in it

  const url = 'https://api.memegen.link/templates/';

  function handleChangeCustomMeme() {
    setCustomMeme(
      `https://api.memegen.link/images/${image}/${topText}/${bottomText}.png`,
    );
  } // function to execute on click of "Create meme" button

  useEffect(() => {
    // useEffect Hook is like componentDidMount, componentDidUpdate & componentWillUnmount combined // side effects like fetching data need to be done via UseEffect hook
    const fetchData = async () => {
      // async await function to fetch data
      try {
        const response = await fetch(url); // await fetch of url => returns a promise
        const json = await response.json(); // await response (objects of templates url)
        setTemplates(json); // setTemplates (empty array) to response
      } catch (e) {
        console.error(e);
      }
    };
    fetchData(); // call the function
  }, []); // dependency array --> specifies the condition to trigger use effect, if empty array => function will run exactly once, no re-renders, otherwise infinite loop

  return (
    <main>
      <section>
        <h1>Create your custom Meme</h1>
        <Inputs
          image={image}
          setImage={setImage}
          topText={topText}
          setTopText={setTopText}
          bottomText={bottomText}
          setBottomText={setBottomText}
        />
        <Button
          image={image}
          setImage={setImage}
          topText={topText}
          setTopText={setTopText}
          bottomText={bottomText}
          setBottomText={setBottomText}
          url={url}
          handleChangeCustomMeme={handleChangeCustomMeme}
          templates={templates}
        />
        <CustomMeme
          customMeme={customMeme}
          setCustomMeme={setCustomMeme}
          image={image}
          topText={topText}
          bottomText={bottomText}
          handleChangeCustomMeme={handleChangeCustomMeme}
        />
        <DownloadButton customMeme={customMeme} />
      </section>
    </main>
  );
}

export default App;
