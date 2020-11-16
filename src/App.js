import "./App.css";
import logo from "./assets/logo.svg";
import rock from "./assets/icon-rock.svg";
import paper from "./assets/icon-paper.svg";
import scissor from "./assets/icon-scissors.svg";
import rules from "./assets/image-rules.svg";
import { useState } from "react";

function App() {
  const choices = ["p", "s", "r"];

  const [showRules, setShowRules] = useState(false);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [result, setResult] = useState("");
  const [myChoice, setMyChoice] = useState("");

  function userSelected(selection) {
    setSelected(selection);
    if (selection !== "") {
      const myChoice = choices[Math.floor(Math.random() * 3)];
      setMyChoice(myChoice);
      switch (selection + myChoice) {
        case "pp":
        case "rr":
        case "ss":
          setResult("ITS A DRAW!");
          break;
        case "ps":
        case "rp":
        case "sr":
          setResult("YOU LOST!");
          break;
        case "pr":
        case "rs":
        case "sp":
          setResult("YOU WON!");
          setScore(score + 1);
          break;
        default:
          break;
      }
    }
  }

  return (
    <div className="app">
      <div className="app-header">
        <img className="app-header-logo" src={logo} alt="logo" />
        <div className="app-header-card">
          <h6>SCORE</h6>
          <h5>{score}</h5>
        </div>
      </div>

      {showRules && (
        <div
          className="app-rules"
          onClick={() => {
            setShowRules(false);
          }}
        >
          <img src={rules} alt="rules" />
        </div>
      )}

      <div className="app-body">
        <div className="app-body-play-area">
          {/* BEFORE USER SELECTS */}
          {selected === "" && (
            <div className="app-body-play-area-row1">
              <img
                onClick={() => {
                  userSelected("p");
                }}
                className="app-body-play-area-row1-paper"
                src={paper}
                alt="paper"
              />
              <img
                onClick={() => {
                  userSelected("s");
                }}
                className="app-body-play-area-row1-scissor"
                src={scissor}
                alt="scissor"
              />
            </div>
          )}
          {selected === "" && (
            <div className="app-body-play-area-row2">
              <img
                onClick={() => {
                  userSelected("r");
                }}
                className="app-body-play-area-row1-rock"
                src={rock}
                alt="rock"
              />
            </div>
          )}

          {/* AFTER USER SELECTS */}
          {selected !== "" && (
            <div>
              <div className="app-body-play-area-selected-headers">
                <h4>YOU SELECTED</h4>
                <h4>I SELECTED</h4>
              </div>
              <div className="app-body-play-area-row1">
                {selected && selected === "p" && (
                  <img
                    className="app-body-play-area-row1-paper"
                    src={paper}
                    alt="paper"
                  />
                )}
                {selected && selected === "s" && (
                  <img
                    className="app-body-play-area-row1-scissor"
                    src={scissor}
                    alt="scissor"
                  />
                )}
                {selected && selected === "r" && (
                  <img
                    className="app-body-play-area-row1-rock"
                    src={rock}
                    alt="rock"
                  />
                )}

                {selected && myChoice === "p" && (
                  <img
                    className="app-body-play-area-row1-paper"
                    src={paper}
                    alt="paper"
                  />
                )}
                {selected && myChoice === "s" && (
                  <img
                    className="app-body-play-area-row1-scissor"
                    src={scissor}
                    alt="scissor"
                  />
                )}
                {selected && myChoice === "r" && (
                  <img
                    className="app-body-play-area-row1-rock"
                    src={rock}
                    alt="rock"
                  />
                )}
              </div>
            </div>
          )}
        </div>
        {selected && (
          <div className="app-body-results">
            <h2>
              {result} {result === "YOU WON!" ? "🚀" : "😞"}
            </h2>
            <button
              onClick={() => {
                setSelected("");
              }}
              className="app-body-results-button"
            >
              Play Again
            </button>
          </div>
        )}
        <div className="app-body-rules">
          <button
            className="app-body-rules-button"
            onClick={() => {
              setShowRules(!showRules);
            }}
          >
            Rules
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
