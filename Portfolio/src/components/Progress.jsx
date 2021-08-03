import React from "react";

function ProgressBar(props) {
  return (
    <div>
      <span className="skill">
        {props.title} <i className="val">{props.width}</i>
      </span>
      <div className="progress">
        <div className="bar" style={{ width: props.width }}></div>
      </div>
    </div>
  );
}
export default ProgressBar;
