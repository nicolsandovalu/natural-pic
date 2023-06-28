import React from "react"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEnvelope, faBirthdayCake } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link active btn-close-white"
                aria-current="page"
                to="/"> <FontAwesomeIcon icon={faHome} />
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products"> 
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/favorites"> 
                Favoritos
              </Link>
            </li>
          </ul>
          <span className="navbar-text"> Natural Pic</span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;