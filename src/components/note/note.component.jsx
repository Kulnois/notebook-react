import React from 'react'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { toggleFav, deleteNote } from '../../redux/actions/note.action'

const Note = ({ note }) => {

    const dispatch = useDispatch()

    const toogleFavoriteHandler = () => {
        dispatch(toggleFav(note))
    }

    const deleteNoteHandler = () => {
        dispatch(deleteNote(note))
    }

    const heartMarkup = note.favorite? 'favorite' : 'favorite_border';
    return (
        <div className="card">
            <div className="card-content">
                <div className="right-align">
                <i className="material-icons red-text" style={{ cursor: 'pointer'}} onClick={toogleFavoriteHandler}>{heartMarkup}</i>
                </div>
                <span className="card-title activator grey-text text-darken-4">{note.title}</span>
                <p>{note.content}</p>
            </div>
            <div className="card-action">
                <div className="row">
                    <div className="col s4 left-align">
                        <span className="gey-text">{moment(note.createdAt.toDate()).fromNow()}</span>
                    </div>
                    <div className="col s8 right-align">
                        <i className="material-icons black-text" >edit</i>
                        <i className="material-icons" style={{ cursor: 'pointer'}} onClick={deleteNoteHandler} >delete</i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Note