import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="welcome" />
        </main>
        <footer className="App-footer">Coded by Sofia Soerensen</footer>
      </div>
    </div>
  );
}
