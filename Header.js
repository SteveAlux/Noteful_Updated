import React, { Component } from 'react'
import {Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
export default class Header extends Component {
    render() {
        return (
           <NavLink to = {'/'} >
               <h2 className= 'Header'>Noteful</h2>
            </NavLink>

        )
    }
}
