import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1> Crossword Game! </h1>
      <button> Check </button>

      <Table />
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
//How do we also make json tables
// Row will represent each row
// <Row number="0" />
// <Row number="1" />
// how do we make each row unique -- using props -- but HOW?
// We need to nest Row inside of Table
// We need to nest Letter inside of Row
export function Row() {
  return (
    <tr>
      <th> C1 </th>
      <th> C2 </th>
      <th> C3 </th>
      <th> C4 </th>
      <th> C5 </th>
    </tr>
  );
}

export function Table(props) {
  return (
    <table>
      <Row />
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
//comment 