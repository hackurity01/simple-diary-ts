import type { View } from "../App";
import { formatDate } from "../utils/date";
import "./MainView.css";

interface MainViewProps {
  setView: (view: View) => void;
}

function MainView({ setView }: MainViewProps) {
  const today = new Date();

  return (
    <>
      <div className="header">
        <div>{formatDate(today)}</div>
        <div>
          <button
            className="history-btn"
            onClick={() => {
              setView("history");
            }}>
            기록 보기
          </button>
        </div>
      </div>
      <div className="question">(질문)</div>
      <div className="content">
        <textarea
          onChange={() => {
            console.log("onChange");
          }}
        />
      </div>
    </>
  );
}

export default MainView;
