import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import Data from './Data';
import FolderContext from './FolderContext';
import Folder from './Folder';
export default function Main(){
   

        return (
            <FolderContext.Consumer>
                {(context) =>(
            <ul className = "folder_list">
            {context.dataBase.notes.map(note =>
                <li key = {note.id}>
                    <h4><NavLink to ={`FolderPage/folder/${note.folderId}/NotesPage/note/${note.id}`}>{note.name}</NavLink></h4>
                    <p>{note.modified}</p>
                </li>)}
                <button>
          Add Note
        </button>
            </ul>
                )}
            </FolderContext.Consumer>
        )
    
}
