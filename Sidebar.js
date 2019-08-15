import React, { Component } from 'react'
import Data from './Data';
import {NavLink} from 'react-router-dom';
import FolderContext from './FolderContext';
import Folder from './Folder';

export default class Sidebar extends Component {

updateFolder=(context,callback) =>  {
        console.log('CALLBACK FOR UPDATEFOLDER: ', callback)
        
        console.log(document.getElementById('foldername').value)
        console.log(context.UpdateFolder)
                    let name = document.getElementById('foldername').value;
                    callback(name);
       
    // console.log('updatefolder clicked')
    }
    render() {
        return(
           <FolderContext.Consumer>
               {(context) =>(
            <>
            <ul>
                {context.dataBase.folders.map(d =>
                    <li key = {d.id}>
                        <h4><NavLink to ={`/FolderPage/folder/${d.id}`}>{d.name}</NavLink></h4>
                        
                </li>)}
            </ul>
            <input type='text' id='foldername'></input>
            <button onClick = {() =>{
                    this.updateFolder(context,context.UpdateFolder)
            } 
                    }>
            Add Folder
        </button>
               
        </>
               )}
           </FolderContext.Consumer>
        )
    }
}
