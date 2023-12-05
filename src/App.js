import React, { useState, useEffect } from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import { Row, Col, Card, Button } from "react-bootstrap";
import { BeatLoader } from "react-spinners";
const { Hercai } = require('hercai');

function App() {
  const [userInput, setUserInput] = useState("");
  const [allInputs, setAllInputs] = useState([]);
  let [loading, setLoading] = useState(false);
  const herc = new Hercai();

  useEffect(() => {
    if (loading) {

     
      herc.question({model:"v3-beta",content:{userInput}}).then(response => {
      console.log(response.reply);
      
      });
    }
  }, [loading]);

  const handleSend = () => {
    setLoading(true);
    let newAllInputs = allInputs;
    newAllInputs.push({
      user: "User",
      message: userInput,
    });
    setAllInputs(newAllInputs);
    setUserInput("");
    console.log("userInput", allInputs);
  };
  return (
    <div className="App">
      <Container>
        <Row>
          <Card className="card">
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <div className="conversation">
                <Col className="user">
                  <p style={{ margin: 0, fontStyle: "italic", fontSize: 14 }}>
                    User:
                  </p>
                  <p style={{ margin: 0 }}>My question?</p>
                </Col>
                <Col className="bot">
                  <p style={{ margin: 0, fontStyle: "italic", fontSize: 14 }}>
                    Learning Bot:
                  </p>
                  <p style={{ margin: 0 }}>My question?</p>
                </Col>
              </div>
              <BeatLoader color="#36d7b7" loading={loading} size={15} />
              <div className="inputCont">
                <input
                  type="text"
                  className="input"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                />
                <Button
                  variant="success"
                  disabled={loading}
                  onClick={() => handleSend()}
                >
                  Send
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Row>
      </Container>{" "}
    </div>
  );
}

export default App;
