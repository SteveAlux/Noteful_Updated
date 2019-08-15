import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import FolderContext from './FolderContext';


 class Folder extends Component {
    updateFolder=(context,callback) => {
        console.log(context.dataBase.folders)
        console.log(document.getElementById('foldername').value)
        console.log(this.props)
       let name1 = document.getElementById('foldername').value
    //    console.log(this.props.updateFolder)
        callback(name1);
    // console.log('updatefolder clicked')
    }
    render() {
        
        return (
            <FolderContext.Consumer>
                {(context)=>(
                   
                    <>
            <ul className = "folder_list">
            {context.dataBase.folders.map(d =>
                <li key = {d.id}>
                    <h4><NavLink to ={`/FolderPage/folder/${d.id}`}>{d.name}</NavLink></h4>
                    
                </li>)}
            </ul>
            <input type='text' id='foldername'/>
            <button onClick = {() => {this.updateFolder(context,context.UpdateFolder)}}>
            Add Folder
        </button>
        </>
                )}
        </FolderContext.Consumer>
        )
    }
}
export default withRouter(Folder);
