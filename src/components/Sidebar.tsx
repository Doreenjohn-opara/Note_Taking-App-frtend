import React from "react";
// import {useLocation} from 'react-router-dom';
import logo from "/assets/logoTemplate2.png";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { FaRegClock, FaRegBell, FaPlus, FaRegNoteSticky } from "react-icons/fa6";
import { LuTag, LuListTodo } from "react-icons/lu";
import { BsListTask } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import sideBike from '/assets/side-bkg.png';
import { useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className="sidebar">
        <img src={logo} alt="logo template" />
        <hr />
        <div className="btn-group">
          <button type="button" onClick={()=>navigate('/add-note')} className="btn btn-danger d-flex gap-3">
            <span><FaPlus/></span>Add New
          </button>
        <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
            <span className="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul className="dropdown-menu">
            <li className="dropdown-item" onClick={()=>navigate("/add-note")}><span><CgNotes /></span>Blank Notes</li>
            <li className="dropdown-item" onClick={()=>navigate("/add-note")}><span><BsListTask/></span>Todo-List</li>
            <li className="dropdown-item" onClick={()=>navigate("/add-note")}><span><LuListTodo/></span>Tasks</li>
            <li className="dropdown-item" onClick={()=>navigate("/add-note")}><span><FaRegNoteSticky/></span>Sticky Notes</li>
        </ul>
        </div>
        
        <ul>
          <li>
            <a href="#">
              <MdOutlineLibraryBooks />
              Your Notes
            </a>
          </li>
          <li>
            <a href="#">
              <FaRegClock /> Reminder
            </a>
          </li>
          <li>
            <a href="#">
              <LuTag />
              Tags
            </a>
          </li>
          <li>
            <a href="#">
              <FaRegBell />
              Notification
            </a>
          </li>
        </ul>

       <img src={sideBike} alt="Side bike picture" />
       <p>Capture thoughts, craft stories</p>
        <ul className="bottom">
          <li><a href="#"><span><IoSettingsOutline/></span>Settings</a></li>
          <button>Logout</button>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
