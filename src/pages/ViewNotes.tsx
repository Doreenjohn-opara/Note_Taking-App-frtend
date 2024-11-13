import React, {useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getNoteById } from '../services/note.services';
import NoteForm from '../components/NoteForm';
import { INoteProps } from '../utils/interface.utils';
import { deleteNote } from '../services/note.services';

const ViewNote: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the note ID from URL
  const navigate = useNavigate();
  const [note, setNote] = useState<INoteProps | null>(null);
  
  useEffect(() => {
    const fetchNote = async () => {
      if (id) {
        try {
          const response = await getNoteById(id); // Fetch the note by ID
          setNote(response.data); // Set the fetched note to state
        } catch (error) {
          console.error("Error fetching note:", error);
        }
      }
    };

    fetchNote();
  }, [id]);

  const handleDelete = async () => {
    if (id) {
      try {
        await deleteNote(id);
        console.log('Note deleted:', id);
        alert('Note has been deleted successfully!');
        navigate('/');  // Redirect after deletion
      } catch (error) {
        console.error('Error deleting note:', error);
        alert('Failed to delete the note. Please try again.');
      }
    } else {
      console.error('Note ID is missing.');
    }
  };


  const handleEdit = () => {
    // Redirect to edit page
    navigate(`/edit-note/${id}`);
  };

  if (!note) {
    return <div>Loading...</div>; // Show loading until note data is fetched
  }
  
    return (
      <NoteForm
        action="view"
        note={note as { title: string; content: string; reminderDate?: string; icon?: string }}
        onSave={handleEdit}
        onDelete={handleDelete}
        onBack={() => window.history.back()}
      />
    );
  };

export default ViewNote;
