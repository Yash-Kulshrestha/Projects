import React from "react";

function About(props){
return (
    <div>
        <li>
            <i className="bi bi-chevron-right"></i>
            <strong>{props.title}</strong> {props.data}
        </li>
    </div>
)
}

export default About;