import React, { Component } from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

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
    menu: {
      about: generateFruitLocaton(),
      portfolio: generateFruitLocaton(),
      contact: generateFruitLocaton()
    }
  };
  componentDidMount() {
    // setInterval(this.snakeMovement,this.state.speed);
    this.startPlay();
    document.onkeydown = this.changeDirection;
  }

  componentDidUpdate() {
    this.checkIfSnakeHitSelf();
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
    if (head[0] >= 100 || head[0] < 0 || head[1] >= 100 || head[1] < 0) {
      console.log(dots, head, "wall");
      this.endGame();
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
      menu: {
        about: generateFruitLocaton(),
        portfolio: generateFruitLocaton(),
        contact: generateFruitLocaton()
      },
      snakeDots: [[0, 0], [4, 0], [8, 0]]
    });
  };

  playAgain = () => {
    window.location.reload();
  };

  isfruitEaten = () => {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    let fruit = this.state.fruit;
    if (head[0] == fruit[0] && head[1] == fruit[1]) {
      console.log(head, this.state.fruit);
      this.state.fruit = generateFruitLocaton();
      let newSnake = [...this.state.snakeDots];
      newSnake.unshift([]);
      this.setState({
        snakeDots: newSnake
      });
      // this.increaseSpeed();
      this.updateScore();
    }
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

  render() {
    return (
      <div className="page-header header-filter">
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
                  <li>Home</li>
                  <li>About</li>
                  <li>Portfolio</li>
                </ul>
              </div>
              <div className="game-area">
                <div class="bar top" />
                <div class="bar right delay" />
                <div class="bar bottom delay" />
                <div class="bar left" />
                <Snake snakeDots={this.state.snakeDots} />
                <Fruit
                  fruitLocation={this.state.fruit}
                  pageClass={"snake-fruit"}
                />
                <Fruit
                  fruitLocation={this.state.menu.about}
                  pageClass={"about-fruit"}
                />
                {/* <MydModalWithGrid handler = {this.startPlay} show={this.state.modalShow} onHide={modalClose}/>  */}
                {/* <EndGame handler={this.playAgain} show={this.state.gameover} score={this.state.playerscore}/> */}
              </div>
            </Col>
            <Col md="8" className="content-title">
              <h1 className="profile-title text-left">Amit Badala</h1>
              <h5 className="text-on-back">Hi I'm</h5>
              <p className="profile-description text-left">
                I like javascript and everything on web, when my dev-senses kick
                in I build presumably awesome stuff. I stay close to community
                and try to keep pace with which the web is evolving. I also like
                to blog about what I learn or things which I find interesting. I
                have working experience in Angular, javascript, .Net, SQL Server
              </p>
              {/* <h1>Hi I'm Amit</h1>
              <h4>
               
              </h4> */}
            </Col>
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
    return <div className={this.props.pageClass} style={style} />;
  }
}

export default PageHeader;
