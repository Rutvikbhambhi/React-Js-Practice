import React from 'react';
import './note.css';

import deleteImg from '../../assest/Delete-img.png';

let timer = 500, timeout

function Note(props) {

  const formateData = (value) => {
    if (!value) return ""

    const date = new Date(value);
    const monthNames = [
      'Jan',
      'Fab',
      'March',
      'April',
      'May',
      'June',
      'July',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec'
    ]

    let hrs = date.getHours()
    let amPm = hrs > 12 ? "PM" : "AM"
    hrs = hrs ? hrs : "12"
    hrs = hrs > 12 ? hrs = 24 - hrs : hrs

    let min = date.getMinutes()
    min = min < 10 ? "0" + min : min

    let day = date.getDate();
    const month = monthNames[date.getMonth()]

    return `${hrs}:${min} ${amPm} ${day} ${month}`
  };

  const debounce = (func) => {
    clearTimeout(timeout)
    timeout = setTimeout(func, timer);
  }

  const updateText = (text) => {
    debounce(() => props.updateText(text))
  }

  return (
    <div className='note' style={{ backgroundColor: props.note.color }}>
      <textarea
        className='note_text'
        defaultValue={props.note.text}
        onChange={(event) => updateText(event.target.value)}
      />

      <div className="note_footer">
        <p>{formateData(props.note.time)}</p>
        <img src={deleteImg} alt="Delete"
          onClick={() => props.deleteNote(props.note.id)}
        />
      </div>
    </div>
  );
};

export default Note;