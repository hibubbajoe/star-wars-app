const Modal = ({ handleClose, show, character }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassName}>
            <section class="modal-main">
                <button type="button" class="modal-btn" onClick={handleClose}>Go back</button>
                <div class="modal-content">
                    <h2>{character.name}</h2>
                    <ul>
                        <li>Birthyear: {character.birth_year}</li>
                        <li>Gender: {character.gender}</li>
                        <li>Height: {character.height}</li>
                        <li>Color of hair: {character.hair_color}</li>
                        <li>Color of skin: {character.skin_color}</li>
                    </ul>
                </div>
            </section>
        </div >
    );
};

export default Modal;