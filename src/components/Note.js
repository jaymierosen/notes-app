import React from "react";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";

import styled, { css } from "styled-components";

const Note = ({ date, id, text, color, deleteNote }) => {
  // const Button = styled.button`
  //   background: ${color};
  //   border-radius: 3px;
  //   border: 2px solid palevioletred;
  //   color: palevioletred;
  //   margin: 0 1em;
  //   padding: 0.25em 1em;
  // `;

  return (
    <div className="note" style={{ backgroundColor: `${color} !important` }}>
      {/* <Button>click me</Button> */}
      <p>{text}</p>
      <div className="note-footer">
        <small>{date}</small>
        <MdModeEdit />
        <MdDeleteForever
          onClick={() => deleteNote(id)}
          className="delete-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
};

export default Note;
