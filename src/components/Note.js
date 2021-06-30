import React from "react";
import { NotesForm } from "./NotesForm";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { useState } from "react";

export const Note = ({ notes, completeNote, updateNote, removeNote, color, handleColorChange }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
    color: "#67d7cc"
  });

  const submitUpdate = (value) => {
    updateNote(edit.id, value, color);
    setEdit({
      id: null,
      value: "",
      color: color
    });
  };

  if (edit.id) {
    return (
      <>
        <NotesForm style={{backgroundColor:color}} edit={edit} onSubmit={submitUpdate} />
        <p>editing mode</p>
      </>
    );
  }

  return (
    <>
      {notes.map((note, i) => {
        return (
          <div key={`${i}`} className="note" style={{ backgroundColor: color }}>
            {/* onClick={() => completeNote(note.id)} */}
            <div key={`${i}`}>
              {note.text}
            </div>
            <div className="notes-footer">
              <small>{note.date}</small>
              <MdEdit
                onClick={() =>
                  setEdit({
                    id: note.id,
                    value: note.text,
                    date: note.date,
                    color: note.color
                  })
                }
              />
            </div>
            <MdDeleteForever onClick={() => removeNote(note.id)} />
          </div>
        );
      })}
    </>
  );
};
