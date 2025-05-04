import "./App.css";
import Dictionary from "./Dictionary";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="welcome" />
        </main>
        <footer className="App-footer">
          Coded by{" "}
          <a href="https://github.com/SofiaSoerensen/dictionary-project">
            Sofia Soerensen
          </a>
        </footer>
      </div>
    </div>
  );
}
