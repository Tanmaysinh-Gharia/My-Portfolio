import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaProjectDiagram } from "react-icons/fa";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiPhp,
  DiDotnet
} from "react-icons/di";
import { TbSql } from "react-icons/tb";
import { SiC, SiCsharp } from "react-icons/si";

const techStack = [
  { icon: <DiPhp />, name: "PHP" },
  { icon: <DiDotnet />, name: ".NET" },
  { icon: <DiJavascript1 />, name: "JavaScript" },
  { icon: <TbSql />, name: "SQL" },
  { icon: <DiNodejs />, name: "Node.js" },
  { icon: <DiReact />, name: "React" },
  { icon: <DiMongodb />, name: "MongoDB" },
  { icon: <SiC />, name: "C" },
  { icon: <SiCsharp />, name: "C#" },
  { icon: <DiPython />, name: "Python" },
  { icon: <DiJava />, name: "Java" },
  { icon: <FaProjectDiagram />, name: "Data Structures & Algorithms" }
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStack.map((tech, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
          <div>
            {tech.icon}
            <div style={{ marginTop: "10px", fontSize: "14px" }}>{tech.name}</div> {/* Adding the name below the icon */}
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
