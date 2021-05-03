import "./styles.css";
import data from "./sample_data.json";

export default function App() {
  return (
    <div className="App">
      <h1> Crossword Game! </h1>
      <button> Check </button>
      <GameBoard data={data.answerKey} />
      <table>
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
  return <input type="textbox" />;
}

export function EmptySpace() {
  return;
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

function Visible() {}
// //return (
//   <ul>
//   {animals.map(animal => (
//     <li>{animal}</li>
//   ))}
// </ul>

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
export function GameBoard(props) {
  // props.answerKey = [][]
  // Loop over props.answerKey

  // loop over answer key

  //for (i = 0; i < props.answerKey.length ; i++) {

  //};
  // if answerKey[i][j] == "" then star else input
  return (
    <table>
      <tr>
        <InputComponent />
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
