import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import Folder from './Folder';
import FolderContext from './FolderContext';
 class SingleNote extends Component {

   deleteNote(context,noteId){
      console.log(context.deleteNote)
      context.deleteNote(context,noteId)
      this.props.history.push('/')
   }

   createNote(context,data){
      const notes =data.notes.find( (n =>
         n.id === this.props.match.params.noteId   
        ))
        return(
      <div>
                
            <h3>{notes.name}</h3>
            <p>{notes.modified}</p>
            <button onClick = {() => {
               this.deleteNote(context,notes.id)
            }}>Delete Note</button>
            <p>{notes.content}</p>
            </div>
        )
   }

    render() {

        
        
        
        
    
    
        
        return (
           <FolderContext.Consumer>
              {(context) =>(
                 this.createNote(context,context.dataBase)
              )}
           </FolderContext.Consumer>
        )
    }
}
export default withRouter(SingleNote);
