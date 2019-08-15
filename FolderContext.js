import React from 'react'


const FolderContext = React.createContext({
    dataBase:[],
    addFolder: () =>{},
    deleteNote: () =>{},
    UpdateFolder: () =>{},
})

export default FolderContext;