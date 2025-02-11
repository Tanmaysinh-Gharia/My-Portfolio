import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FiBookOpen } from "react-icons/fi";
import { Download } from "lucide-react"; 


function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold", fontSize: "30px" }}>{props.title}</Card.Title>
        {
          props.imgPath && (
            <Card.Img style={{borderRadius:"10px", scale:'1'}} variant="top" src={props.imgPath} alt="Project-img" />
          )
        }
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        {/* If the component contains Download link then, it will render the below component  */}
        {
          props.download_url && (<Button variant="primary" className="bg-green-500 hover:bg-green-600 text-white"  href={props.download_url} target="_blank">
            <FiBookOpen /> &nbsp;
            Documentation
        </Button>)
        }
        
        {"\n"}
        {"\n"}

        {/* If the component contains Download link then, it will render the below component  */}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
