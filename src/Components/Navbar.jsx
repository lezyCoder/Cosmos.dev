import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg sticky-top border border-outline-danger ">
      <div className="container d-flex align-items-center justify-content-between ">
        {/* Logo */}
        <div className="logo">
          <p className="m-0 fw-bold">COSMOS.DEV</p>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          {/* Search */}
          <form
            className="d-none d-sm-none d-xl-flex w-50 mx-auto my-2 my-lg-0"
            role="search"
          >
            <input
              className="form-control"
              type="search"
              placeholder="Search"
            />
          </form>

          {/* Links */}
          <ul className="navbar-nav ms-auto d-flex align-items-center gap-lg-4">
            <li className="nav-item">
              <a className="nav-link">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link">Courses</a>
            </li>

            <li className="nav-item">
              <a className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
