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
  { icon: <DiDotnet />, name: ".NET" },
  { icon: <TbSql />, name: "SQL" },
  { icon: <SiCsharp />, name: "C#" },
  { icon: <FaProjectDiagram />, name: "Data Structures & Algorithms" },
  { icon: <DiMongodb />, name: "MongoDB" },
  { icon: <DiPhp />, name: "PHP" },
  { icon: <DiJavascript1 />, name: "JavaScript" },
  { icon: <DiNodejs />, name: "Node.js" },
  { icon: <DiReact />, name: "React" },
  { icon: <SiC />, name: "C" },
  { icon: <DiPython />, name: "Python" },
  { icon: <DiJava />, name: "Java" }
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
