import React, {useState} from 'react';
import { INoteProps } from '../utils/interface.utils';
import { BsEye, BsPencil, BsTrash, BsThreeDots, BsCalendar, BsPeople } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { deleteNote } from '../services/note.services';

interface NoteCardProps {
    note: INoteProps;  // NoteCard expects a `note` prop with type `INoteProps`
    onDelete: (id: string) => void; 
  }

const NoteCard:React.FC<NoteCardProps> = ({ note,onDelete }) => {
  const navigate = useNavigate()
  const [showDropdown, setShowDropdown] = useState(false);

  // List of colors to pick from
  const colors = ['#FFDDC1', '#C1FFD7', '#C1DDFF', '#FFD1DD', '#D1C1FF'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Handle note deletion
  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this note?");
    if (confirmDelete) {
        try {
            await deleteNote(note._id);  // Call delete API
            alert("Note deleted successfully!");
            onDelete(note._id);  // Update parent component
        } catch (error) {
            console.error("Error deleting note:", error);
            alert("Failed to delete the note. Please try again.");
        }
    }
};

  return (
    <>
    <div className="note-card" 
    style={{ backgroundColor: randomColor }}>
      {/* Header with Icon */}
      <div className='note-card-top'>
        <div className="note-card-header">
            <BsCalendar size={24} />
            <BsThreeDots size={20} className="menu-icon"  onClick={toggleDropdown} />
        </div>

        {/* Title and Content */}
        <h2 className="note-title">{note.title}</h2>
        <p className="note-content">{note.content}</p>
      </div>

      {/* Footer with Share Count and Date */}
      <div className="note-card-footer">
        <div className="footer-item">
          <BsPeople size={16} />
          <span>{note.shareCount ? `${note.shareCount} Share` : 'Only You'}</span>
        </div>
        {/* <span>{note.visibility || 'Only You'}</span> */}
        <div className="footer-item">
          <BsCalendar size={16} />
          <span>{note.date}</span>
        </div>
      </div>

      {/* Dropdown Actions */}
      {showDropdown && (
      <div className="dropdown-menu">
        <div onClick={()=>navigate(`/view-note/${note._id}`)} className="dropdown-item"><BsEye /> View</div>
        <div onClick={()=>navigate(`/edit-note/${note._id}`)} className="dropdown-item"><BsPencil /> Edit</div>
        <div onClick={handleDelete} className="dropdown-item"><BsTrash /> Delete</div>
      </div>
      )}
    </div>
    </>
  )
}

export default NoteCard;