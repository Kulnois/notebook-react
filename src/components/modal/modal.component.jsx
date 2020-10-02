import React from 'react'

const Modal = ({ handleClose, show, handleDelete, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
        <section className="modal-main">
            {children}
            <button className="btn waves-effect waves-light red" onClick={handleDelete}>Delete</button>
            <button className="btn waves-effect waves-light grey" onClick={handleClose}>Close</button>
        </section>
        </div>
    )
}

export default Modal