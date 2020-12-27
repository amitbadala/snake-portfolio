import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import Signature from "./../../assets/img/signature.svg";

class Footer extends React.Component {
  render() {
    return (
      <footer className="wave-footer">
        <Container
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {/* <div className="flex-col"> */}
          {/* <div className="developer-animation"> 
        </div> */}
          <div style={{ alignItems: "center", display: "flex", flexGrow: 1 }}>
            <div className="flex-row" style={{ marginRight: "10%" }}>
              <h4>Reach me</h4>

              <p>
                <i className="far fa-envelope"></i> : amitbadala07@gmail.com
              </p>
              <p>
                <i className="fas fa-mobile-alt"></i> : (+91)- 9870758470
              </p>
            </div>
            <div className="flex-row">
              <h4>Follow me</h4>
              <div className="btn-wrapper profile">
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://www.linkedin.com/in/amitbadala/"
                  id="tooltip230450801"
                  target="_blank"
                >
                  <i className="fab fa-linkedin" />
                </Button>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://github.com/amitbadala"
                  id="tooltip318450378"
                  target="_blank"
                >
                  <i className="fab fa-github" />
                </Button>
              </div>
            </div>
          </div>
          <img src={Signature} className="signature" />
        </Container>

        {/* <div className="developer-animation"> 
        </div> */}
        {/* <Container>
          <Row>
            <Col md="3">
              <h1 className="title">Reach me</h1>
            </Col>
            <Col md="3"> 
              <p><i className="far fa-envelope"></i> : amitbadala07@gmail.com</p>
              <p><i className ="fas fa-mobile-alt"></i> : (+91)- 9870758470</p>
            </Col>
            
            <Col md="3"> 
              <div className="btn-wrapper profile"> 
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://www.linkedin.com/in/amitbadala/"
                  id="tooltip230450801"
                  target="_blank"
                >
                  <i className="fab fa-linkedin" />
                </Button> 
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://github.com/amitbadala"
                  id="tooltip318450378"
                  target="_blank"
                >
                  <i className="fab fa-github" />
                </Button> 
              </div>
            </Col>
            <Col md="3">
                <div><img alt="Amit Badala" className="profile-image img-fluid rounded-circle shadow-lg" src={require("../../assets/img/amitbadala_profile.jpg")}/></div>
             </Col>
          </Row>
        </Container> */}
      </footer>
    );
  }
}

export default Footer;
