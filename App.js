import React, { Component } from 'react'
import {Route} from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Main from './Main';
import Folder from './Folder';
import Data from './Data';
import Notes from './Notes';
import SingleNote from './singleNote';
import FolderContext from './FolderContext';
import './App.css';



export default class App extends Component {

  constructor(props){
    super(props)
  this.state = {
    dataBase: {
      'folders':[],
      'notes':[]
    }
  }
    fetch ('http://localhost:9090/folders',{
      method:'GET',
      headers:{
        'content-type':'application-json'
      },
    })
    .then(res => {
      if (!res.ok){
        return res.json.then(error =>{
          throw error
        })
      }
      return res.json()
    })
    .then(data =>{
      console.log("JSON Folders: WORKS")
      console.log(data)
     
      this.setState({
        dataBase:  {
          'folders':data,
          'notes':[]
        }
      })
       
      })
      
  
    .then( ()=>{
      fetch('http://localhost:9090/notes',{
        method:'GET',
        headers:{
          'content-type': 'application-json'
        },
  
      })
      .then(res => {
        if (!res.ok){
          return res.json.then(error =>{
            throw error
          })
        }
        return res.json()
      })
      .then(data =>{
        console.log(this.state.dataBase)
        console.log("JSON NOTES:WORKS")
        console.log(data)
        let currentState= this.state.dataBase.folders
        this.setState({
          dataBase:  {
            'folders': currentState,
            'notes':data
          }
        })
    })
    })
    
  }
 
 
  

  UpdateFolder =(name1)=>{
    console.log(name1);
    
    this.state.dataBase.folders.push({
      name:name1,
      id:Math.floor(Math.random() * 10000)
    })
    this.setState({
      dataBase:this.state.dataBase
  })
}
  deleteNote =(context,noteId) =>{

      fetch(`http://localhost:9090/notes/${noteId}`,{
        method: 'DELETE',
        headers: {
          'content-type': 'application/json'
        },
  })
  fetch(`http://localhost:9090/notes`,{
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    },
})
.then(res => {
  if (!res.ok){
    return res.json.then(error =>{
      throw error
    })
  }
  return res.json()
})
.then(data =>{
  console.log('AFTER BEING DELETED THIS IS THE NEW LIST')
  console.log(data)
  
})



    let newlist=this.state.dataBase.notes.filter(note =>{
      return note.id != noteId
    })
    this.state.dataBase.notes = newlist
    this.setState({
      dataBase:this.state.dataBase
    })
  }
  render() {
    
    const contextValue = {
      dataBase: this.state.dataBase,
      addFolder: this.UpdateFolder,
      deleteNote: this.deleteNote,
      UpdateFolder: this.UpdateFolder
    }
    console.log(contextValue)
    return (
      <>
      <FolderContext.Provider value = {contextValue}>
      < Header />
    <div className='main_app'>
         
         <article>
         <Route path = '/:folderId/NotesPage/note/:noteId' 
          render = {() =>{
            
            return (
              <button>
                Go Back
              </button>
            
              )
          }}
          />
           <Route path = '/FolderPage/folder/:folderId'
           render = {() =>{
            return (
              <>
              <Folder />
              
              < Notes/>
              
              </>
            )
           }}
           />
           
           <Route  exact path = '/'
          render = { () => {
            return (
              <>
              < Sidebar />
              < Main />
              </>
            )
          }}
        />
        
        
        </article>

        <main>
          <Route exact path = '/:folderId/NotesPage/note/:noteId' 
          render = {() =>{
            
            return (
              < SingleNote />
            )
          }}
          />
          {/* <Route exact path = '/FolderPage/folder/:folderId'
          render = { () =>{
           
            return (
              
              
            )
          }}
           /> */}
          {/* <Route  exact path = '/'
          render = { () => {
            return (
             
            )
          }}
        /> */}
       
        </main>
       
      </div>
      </FolderContext.Provider>
      </>
    )
  }
}
