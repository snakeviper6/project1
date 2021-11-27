import React from 'react'

import {Link} from 'react-router-dom'


export default function Menu() {
    return (
       
            <div className="navlinks">
            
            <Link   style={{ textDecoration: 'none' }} className="links" to="/">Acceuil</Link>
            <Link  style={{ textDecoration: 'none' }} className="links" to="/about">A propos</Link>
            <Link   style={{ textDecoration: 'none' }}  className="links" to="/services">Services</Link>
          

            </div>
           
       
    )
}
