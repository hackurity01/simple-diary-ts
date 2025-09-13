import "./HistoryView.css";
import { useDiaryHistory } from "../hooks/useDiaryHistory";

interface HistoryViewProps {
  setView: (view: "main" | "history") => void;
}

function HistoryView({ setView }: HistoryViewProps) {
  const diary = useDiaryHistory();
  const history = Object.entries(diary)
    .map(([date, content]) => ({
      date,
      content,
    }))
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button
          className="back-btn"
          onClick={() => {
            setView("main");
          }}>
          &lt;
        </button>
        <h4>다이어리 기록</h4>
      </div>
      {history.length === 0 && <div>기록이 없습니다.</div>}
      {history.map(({ date, content }) => (
        <div className="diary-item" key={date}>
          <div className="diary-date">{date}</div>
          <div>{content}</div>
        </div>
      ))}
    </>
  );
}
export default HistoryView;
