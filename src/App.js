import "./styles.css";
import data from "./real_cross.json";

export default function App() {
  return (
    <div className="App">
      <h1> Crossword Game! </h1>
      {/* <button> Check </button> */}
      <div id="gameboard">
        <GameBoard data={data.answerKey} clues={data.clueKey} />
      </div>
      <table id="across-table">
        <tr>
          <th> Across</th>
          <th> Down</th>
        </tr>
        <tr>
          <td>
            <AcrossClues data={data.AcrossClues} />
          </td>
          <td>
            <DownClues data={data.DownClues} />
          </td>
        </tr>
      </table>
    </div>
  );
}
export function InputComponent(props) {
  return <input type="textbox" size="1" placeholder={props.clueNumber} />;
}

export function EmptySpace() {
  return;
}

export function Letter(props) {
  return <td> {props.char} </td>;
}

export function Star() {
  return <td class="star"> * </td>;
}

export function LittleClues(props) {
  return (
    <p>
      <b>{props.clue.orientation}</b> <b>{props.clue.number}</b>:{" "}
      {props.clue.stringValue}
    </p>
  );
}

export function AcrossClues(props) {
  // props is an array
  // Loop over props and pass each clue into the clue component
  return (
    <div>
      {props.data.map((clue) => (
        <LittleClues clue={clue} />
      ))}
    </div>
  );
}

export function DownClues(props) {
  return (
    <div>
      {props.data.map((clue) => (
        <LittleClues clue={clue} />
      ))}
    </div>
  );
}

export function GameBoard(props) {
  // props.data = answerKey
  // props.clues = clueKey
  return (
    <table>
      {props.data.map((innerArray, outerIndex) => {
        return (
          <tr>
            {innerArray.map((StringAnswer, innerIndex) => {
              return (
                <td>
                  {StringAnswer === "" ? (
                    <Star />
                  ) : (
                    <InputComponent
                      clueNumber={props.clues[outerIndex][innerIndex]}
                    />
                  )}{" "}
                </td>
              );
            })}
          </tr>
        );
      })}
    </table>
  );
}
