import React, { Component } from "react";
// reactstrap components
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  FormGroup,
  Form,
  Input,
} from "reactstrap";

const generateFruitLocaton = () => {
  const min = 1;
  const max = 96;
  const top = Math.floor(min + (Math.random() * (max - min)) / 4) * 4;
  const left = Math.floor(min + (Math.random() * (max - min)) / 4) * 4;
  return [left, top];
};

class PageHeader extends React.Component {
  state = {
    mounted: false,
    modalShow: true,
    gameover: false,
    speed: 250,
    direction: "RIGHT",
    fruit: generateFruitLocaton(),
    snakeMoveTimer: "",
    playerscore: 0,
    snakeDots: [
      [0, 0],
      [4, 0],
      [8, 0],
    ],
    aboutFruit: generateFruitLocaton(),
    portfolioFruit: generateFruitLocaton(),
    contactFruit: generateFruitLocaton(),
    currentPage: "about",
    gameAreaBorderClass: "text-primary",
  };
  componentDidMount() {
    this.setState({ mounted: true });
    this.startPlay();
    document.onkeydown = this.changeDirection;
  }

  componentDidUpdate() {
    // this.checkIfSnakeHitSelf();
    this.checkIfSnakeHitWall();
    // this.updateScore();
  }

  startPlay = () => {
    this.setState({ modalShow: false });
    this.setState({
      snakeMoveTimer: setInterval(this.snakeMovement, this.state.speed),
    });
  };

  changeDirection = (e) => {
    e = e || window.event;
    switch (e.keyCode) {
      case 37:
        if (this.state.direction !== "RIGHT") {
          this.setState({ direction: "LEFT" });
        }
        break;
      case 38:
        if (this.state.direction !== "DOWN") {
          this.setState({ direction: "UP" });
        }
        break;
      case 39:
        if (this.state.direction !== "LEFT") {
          this.setState({ direction: "RIGHT" });
        }
        break;
      case 40:
        if (this.state.direction !== "UP") {
          this.setState({ direction: "DOWN" });
        }
        break;
    }
  };

  checkIfSnakeHitWall = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length - 1];
    if (head[0] >= 100) {
      const newPos = dots.map((x) => {
        let a = [];
        a[0] = 0;
        a[1] = x[1];
        return a;
      });
      this.setState({ snakeDots: newPos });
      // this.endGame();
    } else if (head[1] >= 100) {
      const newPos = dots.map((x) => {
        let a = [];
        a[1] = 0;
        a[0] = x[0];
        return a;
      });
      this.setState({ snakeDots: newPos });
    } else if (head[0] < 0) {
      const newPos = dots.map((x) => {
        let a = [];
        a[0] = 100 + x[0];
        a[1] = x[1];
        return a;
      });
      this.setState({ snakeDots: newPos });
    } else if (head[1] < 0) {
      const newPos = dots.map((x) => {
        let a = [];
        a[1] = 100 + x[1];
        a[0] = x[0];
        return a;
      });
      this.setState({ snakeDots: newPos });
    }
  };

  checkIfSnakeHitSelf = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length - 1];
    dots.pop();
    dots.forEach((dot) => {
      if (head[0] === dot[0] && head[1] === dot[1]) {
        console.log(head, dot, "self");
        this.endGame();
      }
    });
  };

  snakeMovement = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length - 1];
    // console.log(head,'head');
    switch (this.state.direction) {
      case "LEFT":
        head = [head[0] - 4, head[1]];
        break;
      case "UP":
        head = [head[0], head[1] - 4];
        break;
      case "RIGHT":
        head = [head[0] + 4, head[1]];
        break;
      case "DOWN":
        head = [head[0], head[1] + 4];
        break;
    }
    dots.push(head);
    dots.shift();
    this.setState({
      snakeDots: dots,
    });

    this.isfruitEaten();
  };

  endGame = () => {
    this.setState({ gameover: true });
    clearInterval(this.state.snakeMoveTimer);
    this.setState({
      speed: 500,
      direction: "RIGHT",
      fruit: generateFruitLocaton(),
      about: generateFruitLocaton(),
      portfolio: generateFruitLocaton(),
      contact: generateFruitLocaton(),
      snakeDots: [
        [0, 0],
        [4, 0],
        [8, 0],
      ],
    });
  };

  playAgain = () => {
    window.location.reload();
  };

  isfruitEaten = () => {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    // let fruit = this.state.fruit;
    let aboutFruit = this.state.aboutFruit;
    let portfolioFruit = this.state.portfolioFruit;
    let contactFruit = this.state.contactFruit;
    // someProperty.flag = true;
    // this.setState({someProperty})

    if (head[0] === aboutFruit[0] && head[1] === aboutFruit[1]) {
      if (this.currentPage !== "about") {
        this.setState({
          currentPage: "about",
          gameAreaBorderClass: "text-primary",
        });
        this.setState({ aboutFruit: generateFruitLocaton() });
        this.updateSnake();
      }
    } else if (head[0] === portfolioFruit[0] && head[1] === portfolioFruit[1]) {
      if (this.currentPage !== "portfolio") {
        this.setState({
          currentPage: "portfolio",
          gameAreaBorderClass: "text-success",
        });
        this.setState({ portfolioFruit: generateFruitLocaton() });
        this.updateSnake();
      }
    } else if (head[0] === contactFruit[0] && head[1] === contactFruit[1]) {
      if (this.currentPage !== "contact") {
        this.setState({
          currentPage: "contact",
          gameAreaBorderClass: "text-warning",
        });
        this.setState({ contactFruit: generateFruitLocaton() });
        this.updateSnake();
      }
    }
  };

  updateSnake = () => {
    let newSnake = [...this.state.snakeDots];
    newSnake.unshift([]);
    this.setState({
      snakeDots: newSnake,
    });
  };

  updateScore = () => {
    this.setState({
      playerscore: (this.state.snakeDots.length - 3) * 10,
    });
  };

  increaseSpeed = () => {
    if (this.state.speed > 10) {
      this.setState({
        speed: this.state.speed - 10,
        snakeMoveTimer: setInterval(this.snakeMovement, this.state.speed),
      });
    }
  };

  updateNavContent = (navSection) => {
    this.setState({ currentPage: navSection });
  };

  render() {
    if (!this.state.mounted) {
      return "Loading....";
    }
    return (
      <div className="section section-basic" style={{ flexGrow: 1 }}>
        <img alt="..." className="path" src={require("assets/img/path4.png")} />
        <Container style={{ alignSelf: "center" }}>
          <Row>
            <Col md="4">
              <div className="navMenu">
                <ul>
                  <li>
                    <a
                      href="#about"
                      className="text-primary"
                      onClick={() => this.updateNavContent("about")}
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#portfolio"
                      className="text-success"
                      onClick={() => this.updateNavContent("portfolio")}
                    >
                      Portfolio
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a
                      href="#contact"
                      className="text-warning"
                      onClick={() => this.updateNavContent("contact")}
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="game-area">
                <div className={`test ${this.state.gameAreaBorderClass}`}>
                  <div className="bar top" />
                  <div className="bar right delay" />
                  <div className="bar bottom delay" />
                  <div className="bar left" />
                  <Snake snakeDots={this.state.snakeDots} />

                  <Fruit
                    fruitLocation={this.state.aboutFruit}
                    pageClass={"bg-primary"}
                  />
                  <Fruit
                    fruitLocation={this.state.portfolioFruit}
                    pageClass={"bg-success"}
                  />
                  <Fruit
                    fruitLocation={this.state.contactFruit}
                    pageClass={"bg-warning"}
                  />
                  {/* <MydModalWithGrid handler = {this.startPlay} show={this.state.modalShow} onHide={modalClose}/>  */}
                  {/* <EndGame handler={this.  d-sm-block d-md-none} show={this.state.gameover} score={this.state.playerscore}/> */}
                </div>
              </div>
              <div className="text-center d-sm-block d-md-none">
                <Button
                  color="neutral"
                  type="button"
                  className="btn-sm"
                  onClick={() => this.setState({ direction: "LEFT" })}
                >
                  <i className="fas fa-arrow-left"></i>
                </Button>
                <Button
                  color="neutral"
                  type="button"
                  className="btn-sm"
                  onClick={() => this.setState({ direction: "UP" })}
                >
                  <i className="fas fa-arrow-up"></i>
                </Button>
                <Button
                  color="neutral"
                  type="button"
                  className="btn-sm"
                  onClick={() => this.setState({ direction: "DOWN" })}
                >
                  <i className="fas fa-arrow-down"></i>
                </Button>
                <Button
                  color="neutral"
                  type="button"
                  className="btn-sm"
                  onClick={() => this.setState({ direction: "RIGHT" })}
                >
                  <i className="fas fa-arrow-right"></i>
                </Button>
              </div>
            </Col>

            <UpdateNavContent currentPage={this.state.currentPage} />
          </Row>
          {/* <div className="content-center brand">
            <h1 className="h1-seo">About</h1>
            <h3 className="d-none d-sm-block">
              A beautiful Design System for Bootstrap 4 (reactstrap) and React.
              It's Free and Open Source.
            </h3>
          </div> */}
        </Container>
      </div>
    );
  }
}

class Snake extends Component {
  render() {
    return (
      <div>
        {this.props.snakeDots.map((dot, i) => {
          const style = {
            left: `${dot[0]}%`,
            top: `${dot[1]}%`,
          };
          return <div className="snake-dot" key={i} style={style} />;
        })}
      </div>
    );
  }
}

class Fruit extends Component {
  render() {
    const style = {
      left: `${this.props.fruitLocation[0]}%`,
      top: `${this.props.fruitLocation[1]}%`,
    };
    return (
      <div className={`snake-fruit ${this.props.pageClass}`} style={style} />
    );
  }
}

function UpdateNavContent(props) {
  const pageSection = props.currentPage;
  switch (pageSection) {
    case "about": {
      return (
        <>
          <Col md="5" className="content-title">
            <h1 className="profile-title text-left text-primary">About</h1>
            {/* <h5 className="text-on-back">Hi I'm</h5> */}
            <p className="profile-description text-left">
              I like javascript and everything on web, when my dev-senses kick
              in I build presumably awesome stuff. I've always been drawn to the
              overlap between design and development.{" "}
            </p>
            <br />
            <p>
              My skills are broad: from ux to design, front end to back end
              development.I enjoy each aspect, and love building sites & mobile
              apps from start to finish.
            </p>
            <br />
            <p>
              I stay close to community and try to keep pace with which the web
              is evolving. I have working experience in React, Nodejs, Rails,
              Angular, .Net, SQL Server
            </p>
          </Col>
          <Col md="3">
            <CustomTable />
          </Col>
        </>
      );
    }
    case "portfolio": {
      return <Portfolio />;
    }
    case "contact": {
      return <Contact />;
    }
    default: {
      return (
        <>
          <Col md="5" className="content-title">
            <h1 className="profile-title text-left text-primary">About</h1>
            {/* <h5 className="text-on-back">Hi I'm</h5> */}
            <p className="profile-description text-left">
              I like javascript and everything on web, when my dev-senses kick
              in I build presumably awesome stuff. I've always been drawn to the
              overlap between design and development.{" "}
            </p>
            <br />
            <p>
              My skills are broad: from ux to design, front end to back end
              development.I enjoy each aspect, and love building sites & mobile
              apps from start to finish.
            </p>
            <br />
            <p>
              I stay close to community and try to keep pace with which the web
              is evolving. I also like to blog about what I learn or things
              which I find interesting. I have working experience in Angular,
              javascript, .Net, SQL Server
            </p>
          </Col>
          <Col md="3">
            <CustomTable />
          </Col>
        </>
      );
    }
  }
}

export class CustomTable extends React.Component {
  render() {
    return (
      <Table dark>
        <thead>
          <tr>
            <th>
              <h3 className="title mb-2 lowerCase skills text-primary">
                What I do
              </h3>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>
                <span className="title">Front-end </span>
                Javascript, Angular, React, Redux, Jquery, Ionic Framework,
                Typescript, HTML, CSS
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <span className="title">Back-end </span>
                NodeJS, Express, C#, .Net, MsSQL, MongoDB, Mongoose
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <span className="title">Others </span> Photoshop, IIS, Netlify,
                Heroku
              </p>
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.initialState;
    this.handleCompanyChange = this.handleCompanyChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  initialState = {
    name: "",
    phone: "",
    email: "",
    companyName: "",
    message: "",
    thankyou: "",
  };

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleCompanyChange(event) {
    this.setState({ companyName: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePhoneChange(event) {
    this.setState({ phone: event.target.value });
  }

  handleMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  sendmail = (event) => {
    const { name, email, phone, companyName, message } = this.state;
    event.preventDefault();

    window.emailjs
      .send("gmail", "template_mZ6Chr60", {
        message_html: `${name} from ${companyName} was interested in your profile, his message ${message}. You can contact him 
        on his email: ${email} or phone : ${phone}`,
      })
      .then(() => {
        this.setState(this.initialState);
        this.setState({ thankyou: "Thank you for showing interest !" });
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) => console.error("Failed to send feedback. Error: ", err));
  };
  render() {
    return (
      <>
        <Col className="content-title" md="5">
          <h1 className="profile-title text-left text-warning">Contact</h1>
          <p>{this.state.thankyou}</p>
          <Form id="contact-form" onSubmit={this.sendmail}>
            <Row>
              <Col md="6">
                <FormGroup>
                  <label>Your Name</label>
                  <Input
                    value={this.state.name}
                    onChange={this.handleNameChange}
                    type="text"
                    name="from_name"
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <label>Email address</label>
                  <Input
                    value={this.state.email}
                    type="email"
                    onChange={this.handleEmailChange}
                    name="from_email"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <FormGroup>
                  <label>Phone</label>
                  <Input
                    type="text"
                    value={this.state.phone}
                    onChange={this.handlePhoneChange}
                    name="phoneNo"
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <label>Company</label>
                  <Input
                    type="text"
                    value={this.state.companyName}
                    name="companyName"
                    onChange={this.handleCompanyChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <FormGroup>
                  <label>Message</label>
                  <Input
                    type="text"
                    value={this.state.message_html}
                    name="message_html"
                    onChange={this.handleMessageChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Button
              className="btn btn-warning"
              color="primary"
              data-placement="right"
              type="submit"
              value="Submit"
            >
              Send
            </Button>
          </Form>
        </Col>
        <Col md="3">
          <Table dark>
            <thead>
              <tr>
                <th>
                  <h3 className="title mb-2 lowerCase skills text-warning">
                    Let's get in touch.
                  </h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>
                    <i className="far fa-envelope"></i> : amitbadala07@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-mobile-alt"></i> : (+91)- 9870758470
                  </p>
                </td>
              </tr>
              <tr>
                <td>
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
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </>
    );
  }
}

export class Portfolio extends React.Component {
  render() {
    return (
      <>
        <Col className="content-title portfolio" md="8">
          <h1 className="profile-title text-left text-success">Portfolio</h1>
          <Row className="justify-content-center">
            <Col lg="12">
              <Row className="row-grid">
                <ul>
                  <li>
                    <p>
                      Idyll - Open Source Contribution to markup language IDYLL
                      using react & node , checkout my{" "}
                      <a
                        href="https://github.com/idyll-lang/idyll/pulls?q=is%3Apr+is%3Aclosed+author%3Aamitbadala"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        contribution
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      Onego - Hybrid Mobile application for reseller agents
                      developed using Ionic Framework,Angular |{" "}
                      <a
                        href="https://play.google.com/store/apps/details?id=com.robinhood.pos"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Android
                      </a>{" "}
                    </p>
                  </li>
                  <li>
                    <p>
                      Oneinsure - Hybrid Mobile application for users to manage
                      their insurance policies developed using Ionic
                      Framework,Angular |{" "}
                      <a
                        href="https://apps.apple.com/in/app/oneinsure-your-insurance-app/id1211262262"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Android
                      </a>{" "}
                      ,
                      <a
                        href="https://apps.apple.com/in/app/oneinsure-your-insurance-app/id1211262262"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        iOs
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      Investment Ecommerce - Developed three verticals of
                      investment ecommerce
                    </p>
                  </li>
                  <br />
                  <li>
                    <p>
                      CMS Blog Engine - Created custom themes and an interface
                      to dynamically switch between them
                    </p>
                  </li>
                  <li>
                    <p>
                      Motilal Oswal CRM - worked on one of India's largest
                      trading platform provider
                    </p>
                  </li>
                  <li>
                    <p>Car Rental Project - Car rental web applicatoin </p>
                  </li>
                </ul>
                <h5>
                  For more details download my resume,{" "}
                  <a
                    href="https://drive.google.com/file/d/1h0Azd5TEccOvFmP-KCKVTAKQzewtizfe/view"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>
                </h5>
              </Row>
            </Col>
          </Row>
        </Col>
      </>
    );
  }
}

export default PageHeader;
