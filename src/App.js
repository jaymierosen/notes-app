import "./App.css";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";

// import { SketchPicker } from "react-color";

import styled, { css } from 'styled-components';

// components
import NotesList from "./components/NotesList";
import Search from "./components/Search";

const App = () => {
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  const [noteText, setNoteText] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [color, setColor] = useState("#67d7cc");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleChange = (e) => {
    e.preventDefault();
    setNoteText(e.target.value);
  };

  // const handleNewChange = (e) => {
  //   e.preventDefault();
  //   setNoteText("");
  // };

  const addNote = () => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: noteText,
      date: date.toLocaleDateString()
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
    setColor(color);
  };

  const handleSaveClick = (e) => {
    e.preventDefault();
    // The trim() method removes whitespace from both ends of a string
    if (noteText.trim().length > 0) {
      addNote();
      // after note gets added, clear textarea
      setNoteText("");
      // set color back to default
      setColor("#67d7cc");
    } else {
      alert("Please add text!");
    }
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const changeEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <div className="container">
      <Search handleSearchNote={setSearchText} />
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        noteText={noteText}
        handleChange={handleChange}
        handleSaveClick={handleSaveClick}
        deleteNote={deleteNote}
        changeEditMode={changeEditMode}
        color={color}
        setColor={setColor}
      />
      {/* <SketchPicker color={color} onChange={(color) => { setColor(color.hex)} } /> */}
    </div>
  );
};

export default App;
