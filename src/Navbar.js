import React from 'react'
import './Navbar.css';

 function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div><img src="nzema.png" ></img></div>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">

    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search Program"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
  <hr/>
  <div className = "profile">
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">PROFILE</button>
      </div>
</nav>
    )
}
export default Navbar;
