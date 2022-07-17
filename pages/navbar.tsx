import favi from '../public/images/favicon.png';
import Image from 'next/image';
import { NextPage } from 'next';

const Navbar: NextPage = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#title">
          <Image className="nav-img" src={favi} alt="navbar icon" width={35} height={35} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#title">
                <i className="bi bi-house"></i> Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                <i className="bi bi-file-person"></i> About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                <i className="bi bi-tools"></i> Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#resume">
                <i className="bi bi-file-earmark-pdf"></i> Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                <i className="bi bi-kanban"></i> Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                <i className="bi bi-telephone-inbound"></i> Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
