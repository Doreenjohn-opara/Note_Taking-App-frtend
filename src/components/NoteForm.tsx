import React, {useState} from 'react';
import { INoteForm } from '../utils/interface.utils';
import '../../public/css/noteForm.css';

const NoteForm: React.FC<INoteForm> = ({ action, note, onSave, onDelete, onBack }) => {
    const [title, setTitle] = useState(note?.title || '');
    const [content, setContent] = useState(note?.content || '');
    const [reminderDate, setReminderDate] = useState(note?.reminderDate || '');
    const [icon, setIcon] = useState(note?.icon || '');

    const isViewing = action === 'view';
    const isEditing = action === 'edit';

    const handleSave = () => {
        if (!title.trim() || !content.trim()) {
          alert('Both title and content are required.');
          return;
        }
        onSave({ title, content, reminderDate, icon });
        alert('Note has been saved successfully!'); // Show success alert
      };


  return (
    <>
      <div className='note-form-container'>
      <div className="note-form">
      <h1>{action === 'add' ? 'New Note' : action === 'edit' ? 'Edit Note' : 'View Details'}</h1>

      <div className="form-group">
        <label>Title</label>
        {isViewing ? (
          <p>{title}</p>
        ) : (
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={isViewing}
            placeholder="Enter note title"
          />
        )}
      </div>

      <div className="form-group">
        <label>Content</label>
        {isViewing ? (
          <p>{content}</p>
        ) : (
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            disabled={isViewing}
            placeholder="Enter note content"
          ></textarea>
        )}
      </div>

      <div className="form-group">
        <label>Reminder Date</label>
        {isViewing ? (
          <p>{reminderDate}</p>
        ) : (
          <input
            type="date"
            value={reminderDate}
            onChange={(e) => setReminderDate(e.target.value)}
            disabled={isViewing}
          />
        )}
      </div>

      <div className="form-group">
        <label>Icon</label>
        {isViewing ? (
          <p>{icon}</p>
        ) : (
          <div className="icon-selector">
            {['📅', '📂', '📊', '🎉', '📸', '⚙️'].map((iconOption) => (
              <button
                key={iconOption}
                type="button"
                className={`icon-button ${icon === iconOption ? 'selected' : ''}`}
                onClick={() => setIcon(iconOption)}
              >
                {iconOption}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="actions">
        {isViewing ? (
          <>
            <button onClick={onBack}>Back</button>
            <button onClick={onDelete}>Delete</button>
            <button onClick={() => onSave({ title, content, reminderDate, icon })}>Edit</button>
          </>
        ) : (
          <>
            <button onClick={onBack}>Back</button>
            <button onClick={handleSave}>{isEditing ? 'Save Changes' : 'Save'}</button>
          </>
        )}
      </div>
    </div>
      </div>
    </>
  )
}

export default NoteForm;