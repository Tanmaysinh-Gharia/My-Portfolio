import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body className=" m-0 p-0">
        <blockquote className="blockquote m-0 p-0">
          <p style={{ textAlign: "left" }}>
            Hi Everyone, I am <span className="purple">Tanmaysinh Gharia </span>
            from <span className="purple"> Gujarat, India.</span>
            <br />
            I am an Experienced <span className="purple">BackEnd Developer with working ASP.NET framwork</span> & I Have completed Bacherlors of Engineering in <span className="purple">Computer Science & Engineering </span>  from <br/> Nirma University (Tier- I).
            <br />
            
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Brainstorming Talks
            </li>
            
            <li className="about-activity">
              <ImPointRight /> Badminton
            </li>
            
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
