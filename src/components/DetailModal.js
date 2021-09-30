import '../App.css';

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section class="modal-main">
                <button type="button" class="modal-btn" onClick={handleClose}>Go back</button>
                <div class="modal-content">
                    {children}
                </div>
            </section>
        </div >
    );
};

export default Modal;