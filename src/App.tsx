import { useState } from "react";
import "./App.css";
import MainView from "./components/MainView";
import HistoryView from "./components/HistoryView";

export type View = "main" | "history";

function App() {
  const [view, setView] = useState<View>("main");

  return (
    <div className="container">
      {view === "main" && <MainView setView={setView} />}
      {view === "history" && <HistoryView setView={setView} />}
    </div>
  );
}

export default App;
