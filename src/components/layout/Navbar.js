import React from 'react'
import{Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'


const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className ="container ">
        <Link to ='/' className ="brand-logo"> notificaiton Center </Link>
        <SignedInLinks />
        <SignedOutLinks/>
          
            </div>
        </nav>

    )
}

export default Navbar;

// export default function Navbar() {
//   return (
//     <div>
      
//     </div>
//   )
// }
