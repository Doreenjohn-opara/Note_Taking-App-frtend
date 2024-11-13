import React,  { useState } from 'react';
import NoteCard from './NoteCard';
import { INoteList, INoteProps } from '../utils/interface.utils';

const NoteList:React.FC<INoteList> = ({ notes }) => {

  const [noteList, setNoteList] = useState<INoteProps[]>(notes);

  const handleDelete = (noteId: string) => {
    setNoteList(noteList.filter(note => note._id !== noteId));
  };
  
  return (
    <>
        <div className='note-list'>
            {notes.map((note) => (
                <NoteCard key={note._id} note={note} onDelete={handleDelete}/>
            ))}
        </div>
    </>
  )
}

export default NoteList;