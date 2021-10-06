import React, { useEffect, useState } from 'react';
import Modal from './Modal';

function Container() {

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState("");
    const [character, setCharacter] = useState({});
    const [showModal, setShowModal] = useState(false);

    const pageToggle = (e) => {

        const pageNumber = document.getElementsByClassName('page_list_item');

        Array.from(pageNumber).forEach((page, i) => {
            if (page.innerText !== e.target.innerText) {
                page.classList.replace('active', 'not_active');
            } else {
                page.classList.replace('not_active', 'active');
            }
        })
        setPage(e.target.innerText);
    }

    const handleChange = (e) => {
        setFilter(e.target.value)
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

        const parameters = filter ? `search=${filter}` : `page=${page}`

        fetch(`https://swapi.dev/api/people/?${parameters}`)
            .then(response => response.json())
            .then(data => setData(data.results))
    }, [page, filter])

    return (
        <div className="container">
            <h5>Click on a character for more information</h5>

            <input type="text" placeholder="Searc for character" name="character" onChange={handleChange} />

            <div class="list-div">
                <ul>
                    {data && data.map((item, i) =>
                        <li key={i}>
                            <a value={item.name} onClick={charDetails}>{item.name}</a>
                        </li>)}
                </ul>
            </div>
            <div>
                <ul class="page_list">
                    <li onClick={pageToggle} class="page_list_item active">1</li>
                    <li onClick={pageToggle} class="page_list_item not_active">2</li>
                    <li onClick={pageToggle} class="page_list_item not_active">3</li>
                    <li onClick={pageToggle} class="page_list_item not_active">4</li>
                    <li onClick={pageToggle} class="page_list_item not_active">5</li>
                    <li onClick={pageToggle} class="page_list_item not_active">6</li>
                    <li onClick={pageToggle} class="page_list_item not_active">7</li>
                    <li onClick={pageToggle} class="page_list_item not_active">8</li>
                    <li onClick={pageToggle} class="page_list_item not_active">9</li>
                </ul>
            </div>

            <Modal show={showModal} handleClose={handleClose} character={character} />
        </div>
    )
}

export default Container;