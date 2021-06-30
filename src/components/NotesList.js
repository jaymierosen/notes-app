import React from "react";
import { useState } from "react";
import { NotesForm } from "./NotesForm";
import { Note } from "./Note";
import Search from "./Search";

export const NotesList = ({ getValues }) => {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [color, setColor] = useState("#67d7cc");

  const addNote = (newNote) => {
    if (newNote.text === '') {
      alert("Please add text");
    } else {
      const newNotes = [newNote, ...notes];
      setNotes(newNotes);
      // setColor(color);
    }
  };

  // const completeNote = () => {
  //   let updatedNotes = notes.map((note, id) => {
  //     return note.id === id ? note.isComplete : !note.isComplete;
  //   });
  //   setNotes(updatedNotes);
  // };

  const updateNote = (noteId, newValue, newColor) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setNotes((prev) =>
      prev.map((item) => (item.id === noteId ? newValue : item))
    );
  };

  const handleSearchNote = () => {
    let search = notes.filter((note) =>
      note.text.toLowerCase().includes(searchText)
    );
    setSearchText(search);
  };

  const removeNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const handleColorChange = (e) => {
    e.preventDefault();
    color === "#67d7cc" ? setColor("red") : setColor("#67d7cc");
  };

  return (
    <>
      <Search handleSearchNote={handleSearchNote} />
      <h1>Add a note</h1>
      <div className="notes-list">
        <NotesForm
          setColor={setColor}
          color={color}
          handleColorChange={handleColorChange}
          onSubmit={addNote}
        />
        <Note
          handleColorChange={handleColorChange}
          setColor={setColor}
          color={color}
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          updateNote={updateNote}
          removeNote={removeNote}
        />
      </div>
    </>
  );
};
