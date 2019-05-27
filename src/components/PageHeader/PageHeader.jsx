import React, { Component } from "react";
// reactstrap components
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  UncontrolledTooltip,
  UncontrolledCarousel,
  CardTitle
} from "reactstrap";

const generateFruitLocaton = () => {
  const min = 1;
  const max = 96;
  const top = Math.floor(min + (Math.random() * (max - min)) / 4) * 4;
  const left = Math.floor(min + (Math.random() * (max - min)) / 4) * 4;
  // const fruitLocation = {
  //   top:`${top}%`,
  //   left:`${left}%`
  // }
  return [left, top];
};

class PageHeader extends React.Component {
  state = {
    modalShow: true,
    gameover: false,
    speed: 250,
    direction: "RIGHT",
    fruit: generateFruitLocaton(),
    snakeMoveTimer: "",
    playerscore: 0,
    snakeDots: [[0, 0], [4, 0], [8, 0]],
    aboutFruit: generateFruitLocaton(),
    portfolioFruit: generateFruitLocaton(),
    contactFruit: generateFruitLocaton(),
    currentPage: "about"
  };
  componentDidMount() {
    // setInterval(this.snakeMovement,this.state.speed);
    this.startPlay();
    document.onkeydown = this.changeDirection;
  }

  componentDidUpdate() {
    // this.checkIfSnakeHitSelf();
    this.checkIfSnakeHitWall();
    // this.updateScore();
  }

  startPlay = () => {
    this.state.modalShow = false;
    this.state.snakeMoveTimer = setInterval(
      this.snakeMovement,
      this.state.speed
    );
  };

  changeDirection = e => {
    e = e || window.event;
    switch (e.keyCode) {
      case 37:
        if (this.state.direction != "RIGHT") {
          this.setState({ direction: "LEFT" });
        }
        break;
      case 38:
        if (this.state.direction != "DOWN") {
          this.setState({ direction: "UP" });
        }
        break;
      case 39:
        if (this.state.direction != "LEFT") {
          this.setState({ direction: "RIGHT" });
        }
        break;
      case 40:
        if (this.state.direction != "UP") {
          this.setState({ direction: "DOWN" });
        }
        break;
    }
  };

  checkIfSnakeHitWall = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length - 1];
    if (head[0] >= 100) {
      const newPos = dots.map(x => {
        let a = [];
        a[0] = 0;
        a[1] = x[1];
        return a;
      });
      this.setState({ snakeDots: newPos });
      // this.endGame();
    } else if (head[1] >= 100) {
      const newPos = dots.map(x => {
        let a = [];
        a[1] = 0;
        a[0] = x[0];
        return a;
      });
      this.setState({ snakeDots: newPos });
    } else if (head[0] < 0) {
      const newPos = dots.map(x => {
        let a = [];
        a[0] = 100 + x[0];
        a[1] = x[1];
        return a;
      });
      this.setState({ snakeDots: newPos });
    } else if (head[1] < 0) {
      const newPos = dots.map(x => {
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
    dots.forEach(dot => {
      if (head[0] == dot[0] && head[1] == dot[1]) {
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
      snakeDots: dots
    });

    this.isfruitEaten();
    // if(head[0]==this.state.fruit[0] && head[1]==this.state.fruit[1])
    // {

    //   this.state.snakeDots.push(head);
    //   this.state.speed = 500 - (5*this.state.snakeDots.length);
    //   this.state.snakemovement = setInterval(this.snakeMovement,this.state.speed);

    //   let newSnake = [...this.state.snakeDots];
    //   newSnake.unshift([])
    //   this.setState({
    //     snakeDots: newSnake
    //   })
    // }
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
      snakeDots: [[0, 0], [4, 0], [8, 0]]
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

    if (head[0] == aboutFruit[0] && head[1] == aboutFruit[1]) {
      if (this.currentPage != "about") {
        this.setState({ currentPage: "about" });
        this.setState({ aboutFruit: generateFruitLocaton() });
        this.updateSnake();
      }
    } else if (head[0] == portfolioFruit[0] && head[1] == portfolioFruit[1]) {
      if (this.currentPage != "portfolio") {
        this.setState({ currentPage: "portfolio" });
        this.setState({ portfolioFruit: generateFruitLocaton() });
        this.updateSnake();
      }
    } else if (head[0] == contactFruit[0] && head[1] == contactFruit[1]) {
      if (this.currentPage != "contact") {
        this.setState({ currentPage: "contact" });
        this.setState({ contactFruit: generateFruitLocaton() });
        this.updateSnake();
      }
    }

    // if (head[0] == fruit[0] && head[1] == fruit[1]) {
    //   console.log(head, this.state.fruit);
    //   this.state.fruit = generateFruitLocaton();

    //   // this.increaseSpeed();
    //   this.updateScore();
    // }
  };

  updateSnake = () => {
    let newSnake = [...this.state.snakeDots];
    newSnake.unshift([]);
    this.setState({
      snakeDots: newSnake
    });
  };

  updateScore = () => {
    this.setState({
      playerscore: (this.state.snakeDots.length - 3) * 10
    });
  };

  increaseSpeed = () => {
    if (this.state.speed > 10) {
      this.setState({
        speed: this.state.speed - 10,
        snakeMoveTimer: setInterval(this.snakeMovement, this.state.speed)
      });
    }
  };

  updateNavContent = navSection => {
    this.setState({ currentPage: navSection });
  };

  render() {
    return (
      <div className="section section-basic">
        <img alt="..." className="path" src={require("assets/img/path4.png")} />
        {/* <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" /> */}
        <Container>
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
                <div className="test">
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
                  color="primary"
                  type="button"
                  className="btn-sm"
                  onClick={() => this.setState({ direction: "LEFT" })}
                >
                  Left
                </Button>
                <Button
                  color="primary"
                  type="button"
                  className="btn-sm"
                  onClick={() => this.setState({ direction: "UP" })}
                >
                  Up
                </Button>
                <Button
                  color="primary"
                  type="button"
                  className="btn-sm"
                  onClick={() => this.setState({ direction: "DOWN" })}
                >
                  Down
                </Button>
                <Button
                  color="primary"
                  type="button"
                  className="btn-sm"
                  onClick={() => this.setState({ direction: "RIGHT" })}
                >
                  Right
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
            top: `${dot[1]}%`
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
      top: `${this.props.fruitLocation[1]}%`
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
            <h1 className="profile-title text-left">Hi I'm Amit</h1>
            {/* <h5 className="text-on-back">Hi I'm</h5> */}
            <p className="profile-description text-left">
              I like javascript and everything on web, when my dev-senses kick
              in I build presumably awesome stuff. I've always been drawn to the
              overlap between design and development.{" "}
            </p>

            <p>
              My skills are broad: from ux to design, front end to back end
              development.I enjoy each aspect, and love building sites & mobile
              apps from start to finish, for clients all over the world.
            </p>

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
    case "portfolio": {
      return <Portfolio />;
    }
    case "contact": {
      return <Contact />;
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
              <h3 className="title mb-2 lowerCase">What I do</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>
                <span className="title text-primary">Front-end </span>
                Javascript, Angular 5, React, Jquery, ,Ionic Framework 4, HTML,
                CSS
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <span className="title text-primary">Back-end </span>
                NodeJS, C#, MSSQL, mongoDB
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <span className="title text-primary">Others </span> Photoshop
              </p>
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export class Contact extends React.Component {
  render() {
    return (
      <>
        <Col md="5">
          <Card className="card-plain">
            <CardHeader className="content-title">
              <h1 className="profile-title text-left">Contact</h1>
            </CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label>Your Name</label>
                      <Input type="text" />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label>Email address</label>
                      <Input type="email" />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label>Phone</label>
                      <Input type="text" />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label>Company</label>
                      <Input type="text" />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <label>Message</label>
                      <Input type="text" />
                    </FormGroup>
                  </Col>
                </Row>
                <Button
                  className="btn btn-warning"
                  color="primary"
                  data-placement="right"
                  id="tooltip341148792"
                  type="button"
                >
                  Send
                </Button>
                {/* <UncontrolledTooltip
              delay={0}
              placement="right"
              target="tooltip341148792"
            >
              Can't wait for your message
            </UncontrolledTooltip> */}
              </Form>
            </CardBody>
          </Card>
        </Col>
        <Col md="3">
          <Table dark>
            <thead>
              <tr>
                <th>
                  <h3 className="title mb-2 lowerCase">Let's get in touch.</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="btn-wrapper profile">
                    <ul>
                      <li>
                        <a href="https://github.com/amitbadala">
                          <h4>LinkedIn</h4>
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/amitbadala">
                          <h4>Github</h4>
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/amitbadala">
                          <h4>Twitter</h4>
                        </a>
                      </li>
                    </ul>
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
        <Col className="content-title" md="8">
          <h1 className="profile-title text-left">Portfolio</h1>
          <Row className="justify-content-center">
            <Col lg="12">
              <Row className="row-grid">
                <Col lg="6">
                  <div className="info">
                    <h4 className="info-title">OneGo</h4>
                    <hr className="line-success" />
                    <p>
                      OneGo, is a unique Insruance reseller app.
                      <br />
                      <strong className="text-success">
                        Technology :{" "}
                      </strong>{" "}
                      Ionic Framework v4, Angular 5, Web API, MSSQL.
                    </p>
                  </div>
                </Col>
                <Col lg="6">
                  <div className="info">
                    <h4 className="info-title">Oneinsure.com</h4>
                    <hr className="line-success" />
                    <p>
                      It's an Insurance E-commerce platform.
                      <br />
                      <strong className="text-success">
                        Technology :
                      </strong>{" "}
                      .Net MVC Framework, Web API, Angular js 1 and MSSQL
                    </p>
                  </div>
                </Col>
                <Col lg="6">
                  <div className="info">
                    <h4 className="info-title">CMS Blog Engine</h4>
                    <hr className="line-success" />
                    <p>
                      Developing a CMS system from Scratch for easy management
                      of blogs on Portal.
                      <br />
                      <strong className="text-success">
                        Technology :
                      </strong>{" "}
                      .Net MVC Framework, Web API, Angular js 1 and MSSQL
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </>
    );
  }
}

export default PageHeader;
