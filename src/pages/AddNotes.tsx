import React from 'react';
import NoteForm from '../components/NoteForm';
import { createNote } from '../services/note.services';
import { useNavigate } from 'react-router-dom';

const AddNote:React.FC = () => {
  const navigate = useNavigate();
  
    const handleSave = async (note: { title: string, content: string, reminderDate?: string, icon: string }) => {
      try {
        const savedNote = await createNote(note);
        console.log("Note created successfully:", savedNote);
        alert("Note created successfully!");
        navigate('/');   // Navigate back after saving
    } catch (error) {
        console.error("Failed to create note:", error);
        alert("Failed to save the note. Please try again.");
    }
};

  return (
    <>
    <div className='add-note'>
        <NoteForm action="add" 
        onSave={handleSave} 
        onBack={() => window.history.back()} />
    </div>  
    </>
  )
}

export default AddNote;