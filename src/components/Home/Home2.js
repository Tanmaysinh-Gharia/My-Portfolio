import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";


function Home2() {
  return (
    <Container fluid className="home-about-section" >
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with  programming and love solving complex problems using<b className="purple"> DSA. </b>  🤷‍♂️
              <br />
              <br />I am Great in classics like
              <i>
                <b className="purple"> 🌠Javascript, ☕ JAVA, 🚅PHP, 🐍Python, ❔JQuery, <br></br> 🔪C# and  </b> C.
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products, Optimizations </b> and
                also in areas related to{" "}
                <b className="purple">
                  Embedded Systems.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products and Innovations
              with <b className="purple">Node.js, PHP</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript and other Libraries and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> .Net, React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
        </Row>
        
       
      </Container>
    </Container>
  );
}
export default Home2;
