import React from 'react'
import { Link } from 'react-router-dom'
import { RegistorModal } from './Mymodals'


const Mynav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-info">
    <div className="container-fluid">
      <a className="navbar-brand" to="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/reactbootstrap">ReactBS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="myuimetrial">Material UI</Link>
          </li> 
          <li className="nav-item">
            <Link className="nav-link" to="props">Props</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="binding">Data binding</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="myaxios">Axios</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="charts">My charts</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="service">Services</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Dropdown
            </Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="#">Car</Link></li>
              <li><Link className="dropdown-item" to="#">Bike</Link></li>
              <li><Link className="dropdown-item" to="#">Webpage</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#registor">
           Registor
          </button>
        </form>
      </div>
    </div>
    <RegistorModal/>
  </nav>
  )
}

export default Mynav