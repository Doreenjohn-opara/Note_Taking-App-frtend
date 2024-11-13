import React, {useEffect, useState} from 'react';    // 
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import NoteList from '../components/NoteList';
import { INoteProps } from '../utils/interface.utils';
// import { FaCalendarAlt, FaUser, FaEdit, FaImage } from 'react-icons/fa';
import { getAllNotes } from '../services/note.services';

const Dashboard:React.FC = () => {
  const [notes, setNotes] = useState<INoteProps[]>([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await getAllNotes();
        setNotes(response.data);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };

    fetchNotes();
  }, []);
  
  return (
    <>
        <div className="dashboard">
        <Sidebar/>
          <div className='dashboard-body'>
            <Navbar/>
            <div className="dashboard-content">
              <h2>Your Notes</h2>
              <NoteList notes={notes}/>
          </div>
          </div>
        </div>
    </>

  )
}

export default Dashboard;
