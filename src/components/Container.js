import React, { useEffect, useState } from 'react';
import Modal from './Modal';

function Container() {

    const [data, setData] = useState([]);
    const [page, setPage] = useState("?page=1");
    const [character, setCharacter] = useState({});
    const [showModal, setShowModal] = useState(false);

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
        <div className="container">
            <h5>Click on a character for more information</h5>
            <ul>
                {data && data.map((item, i) =>
                    <li key={i}>
                        <a value={item.name} onClick={charDetails}>{item.name}</a>
                    </li>)}
            </ul>
            <button class="char-btn" onClick={onClick}>Next</button>

            <Modal show={showModal} handleClose={handleClose} character={character} />
        </div>
    )
}

export default Container;