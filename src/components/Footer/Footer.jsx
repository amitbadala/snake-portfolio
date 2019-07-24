import React from "react"; 
// reactstrap components
import {
  Button,
  Container,
  Row,
  Col} from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container>
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
        </Container>
      </footer>
    );
  }
}

export default Footer;
