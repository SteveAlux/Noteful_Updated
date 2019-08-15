import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import FolderContext from './FolderContext';





class Notes extends Component {
   createList(context){
      console.log(this.props.match.params.folderId)
      const notelist = context.filter(note=>{
         console.log(note.folderId)
        return this.props.match.params.folderId === note.folderId
      })
      
      const list=notelist.map(array =>{
         console.log(array.folderId)
         return(
         <li>
            <NavLink to = {`/${array.folderId}/NotesPage/note/${array.id}`}>{array.name}</NavLink>
         </li>
         )
      })
      console.log(this.props)
      return list;
   }

    render() {
       
        
        
        return (
            <FolderContext.Consumer>
               {(context) =>(
           <ul>
              {this.createList(context.dataBase.notes)}
               {/* {notelist.map( note =>{
                  return( <li>
                    <NavLink to = {`/NotesPage/note/${note.id}`}>
                    <h4>{note.name}</h4>
                    </NavLink>
                    <p>{note.modified}</p>
                   </li>
                  )
               })} */}
                <button>
          Add Note
        </button>
           </ul>
               )}
           </FolderContext.Consumer>
        )
    }
}
export default withRouter(Notes)
