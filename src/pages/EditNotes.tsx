import React, { useEffect, useState } from 'react';
import NoteForm from '../components/NoteForm';
import { getNoteById, updateNote } from '../services/note.services';
import { INoteProps } from '../utils/interface.utils';
import { useParams } from 'react-router-dom';

const EditNote:React.FC = () => {
  const { id } = useParams<{ id: string}>();
  const [note, setNote] = useState<INoteProps | null>(null);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        if (id) {
        const response = await getNoteById(id); 
        const fetchedNote = (response as any).data; 
        setNote(fetchedNote); 
        } else {
          console.error("No note ID found in URL params.");
        }
      } catch (error) {
        console.error("Error fetching note:", error);
        alert('Failed to load the note. Please try again.');
      }
    };

    fetchNote();
  }, [id]);

  const handleSave = async (updatedNote: { title: string; content: string; reminderDate?: string; icon?: string }) => {
    try {
      if (id) {
        await updateNote(id, updatedNote);
      console.log('Note updated successfully: ', updatedNote);
      alert('Note has been updated successfully!');
      }
    } catch (error) {
      console.log("Error updating note:", error);
      // alert('Failed to update the note. Please try again.');
    } 
  };
  
  if (note === null) {
    return <div>Loading...</div>; 
  }

  return (
    <>
        <NoteForm
        action="edit"
        note={note as { title: string; content: string; reminderDate?: string; icon?: string }}
        onSave={handleSave}
        onBack={() => window.history.back()}
    />
  </>
  )
}


export default EditNote;