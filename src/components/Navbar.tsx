import React from 'react';
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { BsEnvelopeAt } from "react-icons/bs";

const Navbar:React.FC = () => {

  return (
    <div className='nav-container'>
        <div className="search-container">
          <IoSearch className="search-icon" />
          <input type="text" placeholder="Search" className="search-input" />
        </div>
        
      <div className='navbar-left'>
          <div className="navbar-icon">
            <div className="btn-group">
            <button type="button" className="btn btn-dark-custom d-flex gap-5"><span><CgProfile/></span></button>
            <button type="button" className="btn btn-dark-custom dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            </div>

            <div className="btn-group">
            <button type="button" className="btn btn-dark-custom d-flex gap-5"><span><BsEnvelopeAt/></span></button>
            <button type="button" className="btn btn-dark-custom dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="visually-hidden">Toggle Dropdown</span>
            </button>
          </div>
          </div>
      </div>

    </div>
    
  );
}

export default Navbar;