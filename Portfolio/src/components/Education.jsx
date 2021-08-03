import React from "react";

function Education(props) {
  return (
    <div className="resume-item">
      <h4>{props.title}</h4>
      <h5>{props.duration}</h5>
      <p>
        <em>{props.inst}</em>
      </p>
      <p>{props.description}</p>
    </div>
  );
}
export default Education;
