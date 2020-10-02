import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import Modal from '../modal/modal.component'

import { toggleFav, deleteNote } from '../../redux/actions/note.action'

const Note = ({ note }) => {

    const [show, setShow] = useState(false)

    const dispatch = useDispatch()

    const toogleFavoriteHandler = () => {
        dispatch(toggleFav(note))
    }

    const deleteNoteHandler = () => {
        dispatch(deleteNote(note))
    }

    const editNoteHandler = () => {
        dispatch({type: 'EDIT_NOTE', payload: note})
    }

    const showModal = () => {
        setShow(true)
    }
      
    const hideModal = () => {
        setShow(false)
    }

    const heartMarkup = note.favorite? 'favorite' : 'favorite_border'
    
    return (
        <div className="card">
            <div className="card-content">
                <div className="right-align">
                    <i className="material-icons red-text" style={{ cursor: 'pointer'}} onClick={toogleFavoriteHandler}>{heartMarkup}</i>
                </div>
                
                <Link to={`/note/${note.id}`} >
                    <h5 className="black-text">{note.title}</h5>
                </Link>
                <p>{note.content}</p>
            </div>
            <div className="card-action">
                <div className="row action">
                    <div className="col s4 left-align">
                        <span className="gey-text">{moment(note.createdAt.toDate()).fromNow()}</span>
                    </div>
                    <div className="col s8 right-align">                        
                        <Link to={`/edit/${note.id}`}>
                            <i className="material-icons black-text" onClick={editNoteHandler}>edit</i>
                        </Link> 
                        <i className="material-icons" style={{ cursor: 'pointer'}} onClick={showModal} >delete</i>
                    </div>
                </div>
            </div>
            <Modal show={show} handleClose={hideModal} handleDelete={deleteNoteHandler}>
                <h4>Eliminar Nota</h4>
                <p className="modal-message">Esta seguro que desea eliminar la nota {note.title}?</p>
            </Modal>
        </div>
    )
}

export default Note