import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import spotifyClone from "../../Assets/Projects/spotifyClone.png";
import forFoody from "../../Assets/Projects/forFoody.png";
import angrybird from "../../Assets/Projects/angry.jpg";
import shopping_portal from "../../Assets/Projects/shopping_portal.jpg";
import wanderlust from "../../Assets/Projects/wanderlust.png";

function Projects() {
  return (
    <Container fluid className="project-section" id="projects">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={12} className="project-card">
            <ProjectCard
              imgPath={shopping_portal}
              isBlog={false}
              title=" End to End Shopping Portal  &nbsp;&nbsp;🛒"
              download_url = 'https://drive.google.com/file/d/1zToSPrV3n4SOBecW4UBNWKpx7VnlIo01/view?usp=sharing'
              description= {
                <>
                  🎯 Seamless Role-Based Access Control for secure user management <br/> (Admin, Vendor, Shipping Manager, Delivery Agent, Customer).<br />
                  🔄 Dynamic, real-time interactions using AJAX for a smooth, page-less experience.<br />
                  📈 Optimized SQL Database with 3NF normalization for efficiency.<br />
                  🛍️ Persistent Cart System retaining user selections after logout.<br />
                  🔒 CAPTCHA protection for secure authentication.<br />
                  📦 Real-time Order & Inventory Management updates.<br />
                  🔧 Modular and scalable PHP architecture for easy maintenance and growth.<br />
                  🚚 Smooth tracking & shipping management for seamless logistics.<br />
                  🛡️ Enhanced security and performance (OWASP & SQL Injection protection).<br/>
                  👨‍💻 Tech Used: JS, PHP, HTML, CSS, bootstrap, MySQL, AJAX.
                </>
              }
              ghLink="https://github.com/Tanmaysinh-Gharia/Shopping-Portal"
            />
          </Col>
          <Col md={10} className="project-card">
            <ProjectCard
              imgPath={angrybird}
              isBlog={false}
              title="Angry Bird Game"
              description={<>
              🛠️ Built with Pygame & Pymunk – Realistic 2D physics-based interactions.<br/>
🎯 Multi-Level Gameplay – Static and dynamic pig behaviors with varying difficulties.<br/>
🏹 Advanced Projectile Mechanics – Slingshot physics with trajectory calculation.<br/>
🕹️ Cheat System – Toggle gravity, walls, and instant quit using keyboard shortcuts.<br/>
🏆 Dynamic Scoring Algorithm – Calculates scores based on destruction and remaining birds.<br/>
⏸️ State Management – Pause and resume game states without losing progress.<br/>
🔄 Event-Driven Architecture – Efficient handling of user input and game logic.<br/>
📦 Modular Codebase – Organized structure for easy modifications and feature additions.<br/>
⚡ Optimized Rendering – Efficient sprite handling to reduce lag on lower-end systems.<br/>
🚀 Open-Source & Extensible – Easily customizable with additional levels, birds, or mechanics.<br/>
👨‍💻 Tech Used: Python, Pygame, Pymunk.<br/>
              </>}
              ghLink="https://github.com/Tanmaysinh-Gharia/Angry-Bird-with-cheats-.git"
              // demoLink="https://main--personalmanager.netlify.app/login"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              // imgPath={wanderlust}
              isBlog={false}
              title="Excel & PowerPoint Automation"
              description = {
                <><br></br><h4>Objective:</h4>
                Automate Excel data processing for efficient handling and reporting.<br/>
                Generate structured PowerPoint slides dynamically from processed data.<br/>
                Reduce manual effort and improve accuracy in presentations.<br/><br/>
                
                <h4>Key Features:</h4>
                ✅ Excel Automation: Extracts, formats, and processes raw data.<br/>
                ✅ Translation Module: Converts names and addresses from English to Gujarati.<br/>
                ✅ PowerPoint Generation: Creates professional slides from Excel data.<br/>
                ✅ Real-Time Data Updates: Ensures accurate and up-to-date information.<br/>
                ✅ Time Efficiency: Saves 40+ hours per month of manual work.<br/>
                ✅ Enhanced Presentation Quality: Improves readability and clarity by 20%.<br/><br/>
                
                <h4>Technologies Used:</h4>
                Backend: Python (openpyxl, googletrans, python-pptx)<br/>
                Automation Tools: Python scripting for Excel & PowerPoint processing<br/>
                Data Processing: CSV/Excel file handling<br/><br/>
                
                <h4>Impact:</h4>
                ⚡ Eliminates repetitive tasks, boosting productivity.<br/>
                📊 Improves report accuracy and presentation quality.<br/>
                🚀 Scalable and customizable for various business needs.<br/>
                </>
              }
              
              ghLink="https://github.com/Tanmaysinh-Gharia/Excel-Automation-"
              // demoLink="https://wanderlust-i2mu.onrender.com/listing"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
