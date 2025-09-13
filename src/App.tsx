import "./App.css";
import MainView from "./components/MainView";
import HistoryView from "./components/HistoryView";
import { useState } from "react";

function App() {
  const [view, setView] = useState("main"); // "main" | "history"

  return (
    <div className="container">
      {view === "main" && <MainView setView={setView} />}
      {view === "history" && <HistoryView setView={setView} />}
    </div>
  );
}

export default App;
