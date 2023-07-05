import React from "react";

function Navbar () {

    return (

        <nav className="navbar bg-dark text-white">
            <div className="container">

             <a className="navbar-brand text-white">Start Bootsrap</a>
             
             <div className="d-flex">
             <a className="nav-link active m-2" aria-current="page" href="#">Home</a>
             <a className="nav-link m-2" href="#">About</a>
             <a className="nav-link m-2" href="#">Services</a>
             <a className="nav-link m-2" href="#">Contact</a>
             </div>

            </div>
        </nav>

    )
}

export default Navbar;