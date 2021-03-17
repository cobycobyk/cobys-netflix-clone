import "./App.css";
import Row from "./components/Row/Row";

export default function App() {
  return (
    <div className="App">
      <h1>home</h1>
      <Row title="NETFLIX ORIGINALS" />
      <Row title="Trending Now" />
    </div>
  );
}
