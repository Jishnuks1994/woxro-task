import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="py -3" style={{ background: "#000000" }}>
        <div className="py-3 text-end">
          {" "}
          <button className=" close-btn">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className=" container">
          <div className="text-center">
            <p
              className="text-white"
              style={{ fontFamily: "Roboto, sans-serif", fontSize: "42px" }}
            >
              Epic Games : An American video game and software developer and
              publisher based in Cary, North Carolina.
            </p>
          </div>
          <div className="text-center">
            <img
              src="https://i.postimg.cc/D0NnW2km/fortnite-pictures-b5kfcchwazwiz3cs-1.jpg"
              alt="fortnite-pictures"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className="mt-5">
            <p
              className="text-white text-center opacity-50"
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "19px" }}
            >
              Create, play, and battle with friends for free in Fortnite. Be the
              last player standing in Battle Royale and Zero Build, experience a
              concert or live event, or discover over a million creator made
              games, including racing, parkour, zombie survival, and more. Each
              Fortnite island has an individual age rating so you can find the
              one that's right for you and your friends. Find it all in Fortnite
              ... Drop In.
            </p>
          </div>
          <div className="text-center ">
            <Button className="px-5 bg-white rounded-0 text-dark border-0">
              <b>Visit Website</b>
            </Button>
          </div>
          <div className="text-center" style={{ marginTop: "80px" }}>
            <Row>
              <Col>
                <Card className="rounded-0 bg-black" style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    className="rounded-0"
                    src="https://i.postimg.cc/gJFfTN8S/Mask-group.jpg"
                  />
                  <Card.Body>
                    <Card.Text className="text-center text-white">
                      Explore large, destructible environments where no two
                      games are ever the same.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="rounded-0 bg-black" style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    className="rounded-0"
                    src="https://i.postimg.cc/NjV6YnN4/Mask-group-1.jpg"
                  />
                  <Card.Body>
                    <Card.Text className="text-center text-white">
                      Team up with friends by sprinting, climbing and smashing
                      your way to earn your Victory Royale
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="rounded-0 bg-black" style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    className="rounded-0"
                    src="https://i.postimg.cc/0yM9xyzD/Mask-group-2.jpg"
                  />
                  <Card.Body>
                    <Card.Text className="text-center text-white">
                      Discover even more ways to play across thousands of
                      creator-made game genres
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>

          <div className="text-center" style={{ marginTop: "80px" }}>
            <h1
              className="text-white"
              style={{ fontFamily: "Roboto, sans-serif", fontSize: "42px" }}
            >
              Our Contribution
            </h1>
            <p
              className="text-white opacity-50"
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "19px" }}
            >
              Our core offering extends beyond mere profit generation; we
              emphasize the growth and active involvement of our user community.
              Collaborating with us represents an investment, rather than a mere
              expenditure. Our dedication to providing distinctive digital
              interactions guarantees unparalleled benefits for our clientele.
            </p>
          </div>

          <div className="text-center">
            <Row>
              <Col>
                <p
                  className="text-white"
                  style={{ fontFamily: "Roboto, sans-serif", fontSize: "80px" }}
                >
                  5M
                </p>
                <p
                  className="text-white"
                  style={{ fontFamily: "Roboto, sans-serif", fontSize: "20px" }}
                >
                  Daily User <br /> Engagements
                </p>
              </Col>
              <Col>
                <p
                  className="text-white"
                  style={{ fontFamily: "Roboto, sans-serif", fontSize: "80px" }}
                >
                  $500K
                </p>
                <p
                  className="text-white"
                  style={{ fontFamily: "Roboto, sans-serif", fontSize: "20px" }}
                >
                  Revenue Surge for an <br /> Platform
                </p>
              </Col>
              <Col>
                <p
                  className="text-white"
                  style={{ fontFamily: "Roboto, sans-serif", fontSize: "80px" }}
                >
                  10X
                </p>
                <p
                  className="text-white"
                  style={{ fontFamily: "Roboto, sans-serif", fontSize: "20px" }}
                >
                  ROAS on all our <br /> marketing campaigns
                </p>
              </Col>
            </Row>
          </div>

          <div
            className="text-center container col-10"
            style={{ marginTop: "100px" }}
          >
            <h3
              className="text-white"
              style={{ fontFamily: "Roboto, sans-serif", fontSize: "45px" }}
            >
              Interested in delving deeper into the project?
            </h3>
            <p
              className="text-white px-5"
              style={{ fontFamily: "Roboto, sans-serif", fontSize: "19px" }}
            >
              If you'd like to explore further details about our initiatives or
              any of our affiliated brands, don't hesitate to connect. You can
              reach out to us via email at <b>hello@abc.com</b> or give us a
              call at <b>+91 480 20802730</b>.
            </p>

            <div className="text-center" style={{ marginTop: "70px" }}>
              <Row>
                <Col>
                  <Button variant="outline-light" className="rounded-0 px-4 mt-1">
                    Ring us on Skype
                  </Button>
                </Col>
                <Col>
                  <Button variant="light" className="rounded-0 px-5 mt-1">
                    Contact Us
                  </Button>
                </Col>
              </Row>
            </div>
          </div>

          <div
            className="text-center"
            style={{ marginTop: "200px", paddingBottom: "10px" }}
          >
            <p className="text-white">
              © 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
