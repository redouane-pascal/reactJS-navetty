import React from 'react';
import './css/style.css';

const Switch = ({ isFromCP, onChange}) => {
  return (
    <div className="divBottom">
    <div className="spanFrom1">From CASA PORT</div>
    <label className="switch">
        <input
            type="checkbox"
            checked={isFromCP}
            onChange={onChange}
        />
        <span />
    </label>
    <div className="spanFrom2">From KENITRA</div>
    <div className="aboutMe">
        <span className="madeBy">Made by &nbsp;
            <a href="https://www.linkedin.com/in/radwanbasqual/" className="authorName">Radwan BASQUAL</a>_2018
        </span>
    </div>
</div>
  );
};


export default Switch;