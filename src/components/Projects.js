import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import autotuner from "../assets/img/autotune.jpeg";
import hacker from "../assets/img/hacker.gif";
import phoneme from "../assets/img/phoneme.jpeg";
import spot from "../assets/img/spot.jpeg";
import mfcc from "../assets/img/mfcc.jpeg";
import hmm from "../assets/img/hmm.jpg";
import transform from "../assets/img/transformations.jpeg";
import opencv from "../assets/img/opencv.jpeg";
import tttjava from "../assets/img/tttjava.jpeg";
import tttpython from "../assets/img/tttpython.jpeg";
import stormbound from "../assets/img/stormbound.jpeg";
import familead from "../assets/img/familead.jpeg";
import portfolio from "../assets/img/portfolio.jpeg";
import spending from "../assets/img/spending_score.jpg";
import face_id from "../assets/img/face_id.jpeg";
import ctrl_f from "../assets/img/ctrl_f.jpeg";
import ahg from "../assets/img/ahg.jpg";
import heart from "../assets/img/heart.webp";
import twitter from "../assets/img/twitter.png";
import wine from "../assets/img/wine.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const tab1 = [
    {
      title: "Stock Trading Bot",
      description: "Machine Learning",
      imgUrl: spending,
      linkUrl: "https://github.com/rparappuram/AlpacaTradingAlgo",
    },
    {
      title: "LLM Chatbot",
      description: "Artificial Intelligence",
      imgUrl: hmm,
      linkUrl: "https://github.com/rparappuram/python-chatbot",
    },
    {
      title: "Social Security Administration Name Analysis",
      description: "Machine Learning",
      imgUrl: opencv,
      linkUrl: "https://github.com/rparappuram/SSA-Name-Analysis",
    },
    {
      title: "Anonymous Confessions",
      description: "Software Engineering",
      imgUrl: heart,
      linkUrl: "https://github.com/rparappuram/Anonymous-Confessions",
    },
    {
      title: "Twitter Clone",
      description: "Software Engineering",
      imgUrl: twitter,
      linkUrl: "https://github.com/rparappuram/twitter-react-clone",
    },
    {
      title: "Wine World",
      description: "Software Engineering",
      imgUrl: wine,
      linkUrl: "https://github.com/rparappuram/wineworld",
    },
  ];

  // const tab2 = [
  //   {
  //     title: "OpenCV ROS",
  //     description: "Autonomous Mobile Robotics",
  //     imgUrl: opencv,
  //     linkUrl: "",
  //   },
  //   {
  //     title: "Tick-Tac-Toe Bot Java",
  //     description: "Artificial Intelligence",
  //     imgUrl: tttjava,
  //     linkUrl: "",
  //   },
  //   {
  //     title: "Tic Tac Toe Bot Python",
  //     description: "Artificial Intelligence",
  //     imgUrl: tttpython,
  //     linkUrl: "",
  //   },
  //   {
  //     title: "Stormbound PVP Bot",
  //     description: "Artificial Intelligence",
  //     imgUrl: stormbound,
  //     linkUrl: "",
  //   },
  //   {
  //     title: "FamiLead",
  //     description: "Software Engineering",
  //     imgUrl: familead,
  //     linkUrl: "",
  //   },
  //   {
  //     title: "Spending Score Model",
  //     description: "Machine Learning",
  //     imgUrl: spending,
  //     linkUrl: "",
  //   },
  // ];

  // const tab3 = [
  //   {
  //     title: "Portfolio Website",
  //     description: "Software Engineering",
  //     imgUrl: portfolio,
  //     linkUrl: "",
  //   },
  //   {
  //     title: "Face ID Login",
  //     description: "Computer Vision & Software Engineering",
  //     imgUrl: face_id,
  //     linkUrl: "",
  //   },
  //   {
  //     title: "Enhanced Ctrl F",
  //     description: "Artificial Intelligence & Software Engineering",
  //     imgUrl: ctrl_f,
  //     linkUrl: "",
  //   },
  //   {
  //     title: "AHG Direction Guide",
  //     description: "Artificial Intelligence & Robotics",
  //     imgUrl: ahg,
  //     linkUrl: "",
  //   },
  //   {
  //     title: "Exciting New Projects",
  //     description: "Coming Soon!",
  //     imgUrl: hacker,
  //     linkUrl: "",
  //   },
  //   // {
  //   //   title: "Exciting New Projects",
  //   //   description: "Coming Soon!",
  //   //   imgUrl: hacker,
  //   //   linkUrl: "",
  //   // },
  // ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Throughout my personal project history, I have strived for
                    educational enrichment to better my understanding of
                    computer science as well as the furtherment of science. To
                    achieve this purpose, I've researched innovative approaches
                    to modern technology as seen below.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {tab1.map((tab1, index) => {
                            return <ProjectCard key={index} {...tab1} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          <p>
                            In Progress! Exciting New Projects To Be Released
                            Soon :)
                          </p>
                          {/* {
                          tab2.map((tab2, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...tab2}
                                />
                            )
                          })
                        } */}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          <p>
                            In Progress! Exciting New Projects To Be Released
                            Soon :)
                          </p>
                          {/* {
                          tab3.map((tab3, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...tab3}
                                />
                            )
                          })
                        } */}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={portfolio}></img>
    </section>
  );
};
