import React from 'react'
import moment from 'moment'

const Note = ({ note }) => {

    const heartMarkup = note.favorite? 'favorite' : 'favorite_border';
    return (
        <div className="card">
            <div className="card-content">
                <div className="right-align">
                <i className="material-icons red-text" style={{ cursor: 'pointer'}}>{heartMarkup}</i>
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
                        <i className="material-icons" style={{ cursor: 'pointer'}} >delete</i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Note