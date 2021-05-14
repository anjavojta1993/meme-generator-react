import './App.css';
import { useEffect, useState } from 'react';
import Button from './components/Button';
import CustomMeme from './components/CustomMeme';
import DownloadButton from './components/DownloadButton';
import Inputs from './components/Inputs';

function App() {
  const [image, setImage] = useState('');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [customMeme, setCustomMeme] = useState(
    'https://api.memegen.link/images/saltbae/Let_me/salt_you.png',
  );
  const [templates, setTemplates] = useState([]);

  const url = 'https://api.memegen.link/templates/';

  function handleChangeCustomMeme() {
    setCustomMeme(
      `https://api.memegen.link/images/${image}/${topText}/${bottomText}.png`,
    );
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setTemplates(json);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

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
