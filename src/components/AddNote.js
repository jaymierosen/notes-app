import React from "react";
import { MdModeEdit } from "react-icons/md";
import { SketchPicker } from "react-color";

const AddNote = ({
  handleChange,
  handleSaveClick,
  noteText,
  setColor,
  color
}) => {
  const charLimit = 200;
  return (
<>
    <div className="note" style={{
      backgroundColor: color,
      height: "300px",
      transition: "ease all 500ms"
    }}>
      <textarea
        value={noteText}
        rows="8"
        cols="10"
        placeholder="Type to add a new note"
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        {/* every time the user types, the char counts goes up or down */}
        <small>{charLimit - noteText.length} char remaining</small>
        <button>
          <MdModeEdit size="1.3em" />
        </button>
        <button type="submit" onClick={handleSaveClick} className="save">
          Save
        </button>
        <p>{color}</p>
      </div>
    </div>
    <SketchPicker color={color} onChange={(color) => { setColor(color.hex)} } />
</>
  );
};

export default AddNote;
