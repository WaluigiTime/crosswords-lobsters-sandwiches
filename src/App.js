import "./styles.css";
import data from "./sample_data.json";

export default function App() {
  return (
    <div className="App">
      <h1> Crossword Game! </h1>
      <button> Check </button>

      <GameBoard data={data.answerKey} />
      <Clues data={data.clues} />
    </div>
  );
}
//line 8: <Table <Row <letter/> /> />
export function Letter(props) {
  return <td> {props.char} </td>;
}

export function Star() {
  return <td> * </td>;
}

export function LittleClues(props) {
  return (
    <p>
      {props.clue.orientation} {props.clue.number}: {props.clue.stringValue}
    </p>
  );
}
export function Clues(props) {
  // props is an array
  // Loop over props and pass each clue into the clue component
  return <LittleClues clue={props.data[0]} />;
}

export function GameBoard(props) {
  // loop over answer key
  // if answerKey[i][j] == "" then star else input
  return (
    <table>
      <tr>
        <Letter char="O" />
        <Letter char="M" />
        <Letter char="A" />
        <Letter char="R" />
        <Letter char="I" />
      </tr>
      <tr>
        <Star />
        <Star />
        <Star />
        <Star />
        <Letter char="S" />
      </tr>
      <tr>
        <Star />
        <Star />
        <Star />
        <Star />
        <Letter char="S" />
      </tr>
      <tr>
        <Star />
        <Star />
        <Star />
        <Star />
        <Letter char="A" />
      </tr>
      <tr>
        <Star />
        <Star />
        <Star />
        <Star />
        <Letter char="C" />
      </tr>
    </table>
  );
}
