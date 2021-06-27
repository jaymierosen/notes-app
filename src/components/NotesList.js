import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({
  notes,
  noteText,
  handleChange,
  handleSaveClick,
  deleteNote,
  changeEditMode,
  setColor,
  color
}) => {
  return (
    <div className="notes-list">
      {notes.map((note, i) => {
        return (
          <Note
            changeEditMode={changeEditMode}
            deleteNote={deleteNote}
            key={`${i}`}
            text={note.text}
            id={note.id}
            date={note.date}
          />
        );
      })}
      <AddNote
        color={color}
        setColor={setColor}
        noteText={noteText}
        handleChange={handleChange}
        handleSaveClick={handleSaveClick}
        deleteNote={deleteNote}
      />
    </div>
  );
};

export default NotesList;
