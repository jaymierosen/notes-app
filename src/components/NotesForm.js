import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";

export const NotesForm = ({ onSubmit, handleColorChange, color }) => {
  const [text, setText] = useState("");

  const date = new Date();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
      color: color
    });
    setText("");
  };

  console.log(color)

  return (
    <form
      className="note new"
      onSubmit={handleSubmit}
      style={{
        backgroundColor: color
      }}
    >
      <textarea
        onChange={handleChange}
        type="text"
        name="text"
        placeholder="Add a note"
        value={text}
      />
      <div className="note-footer">
        <button onClick={(handleColorChange)}>Change color</button>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
