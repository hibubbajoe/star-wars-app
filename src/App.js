import './App.css';
import React, { useEffect, useState } from 'react';
import Modal from './components/DetailModal';

function App() {

  const [data, setData] = useState([]);
  const [page, setPage] = useState("?page=1");
  const [character, setCharacter] = useState({});
  const [colorMode, setColorMode] = useState('darkMode')
  const [showModal, setShowModal] = useState(false);

  const lightModeImg = {
    toggle: 'https://i.etsystatic.com/6566993/r/il/a1cb0a/2161676536/il_570xN.2161676536_1emz.jpg',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1200px-Star_wars2.svg.png',
  }
  const darkModeImg = {
    toggle: 'https://i.ebayimg.com/images/g/-qAAAOSwRLZT4YZV/s-l400.jpg',
    logo: 'https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-symbol.jpg'
  }

  const onClick = (e) => {
    e.preventDefault();
    if (e.target.innerText === 'Next') {
      setPage('?page=2');
      e.target.innerText = 'Previous';
    } else if (e.target.innerText === 'Previous') {
      setPage('?page=1');
      e.target.innerText = 'Next'
    }
  }

  const colorToggle = (e) => {
    e.preventDefault();
    if (e.target.src === lightModeImg.toggle) {
      setColorMode('darkMode');
    } else if (e.target.src === darkModeImg.toggle) {
      setColorMode('lightMode');
    }
  }

  const handleShow = () => {
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const charDetails = (e) => {
    const character = data.find(char => char.name === e.target.innerHTML);
    setCharacter(character);
    handleShow()
  }

  useEffect(() => {
    const baseUrl = `https://swapi.dev/api/people${page}`;

    fetch(baseUrl)
      .then(response => response.json())
      .then(data => setData(data.results));

  }, [page])

  return (
    <div className={colorMode}>
      <div className="header">
        <img src={colorMode === 'lightMode' ? lightModeImg.logo : darkModeImg.logo} alt="star wars logo" class="header-logo-img" />
        <img src={colorMode === 'lightMode' ? lightModeImg.toggle : darkModeImg.toggle} alt="toggle button star wars logo" class="header-toggle-img" onClick={colorToggle} />
      </div>
      <div className="container">
        <h5>Click on a character for more information</h5>
        <ul>
          {data && data.map((item, i) =>
            <li key={i}>
              <a value={item.name} onClick={charDetails}>{item.name}</a>
            </li>)}
        </ul>
        <button class="char-btn" onClick={onClick}>Next</button>

        <Modal show={showModal} handleClose={handleClose} >
          <h2>{character.name}</h2>
          <ul>
            <li>Birthyear: {character.birth_year}</li>
            <li>Gender: {character.gender}</li>
            <li>Height: {character.height}</li>
            <li>Color of hair: {character.hair_color}</li>
            <li>Color of skin: {character.skin_color}</li>
          </ul>
        </Modal>
      </div>
    </div>
  );
}

export default App;