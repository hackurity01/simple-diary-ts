import type { View } from "../App";
import { formatDate } from "../utils/date";
import "./HistoryView.css";

interface HistoryViewProps {
  setView: (view: View) => void;
}

function HistoryView({ setView }: HistoryViewProps) {
  const diary: Record<string, string> = JSON.parse(
    window.localStorage.getItem("diary") || "{}"
  );

  // { 날짜키: 내용 } 객체를 최신 날짜부터 보이는 배열로 변환
  const history = Object.entries(diary)
    .map(([dateKey, content]) => ({ dateKey, content }))
    .sort((a, b) => (a.dateKey < b.dateKey ? 1 : -1));

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
      {history.length === 0 && <div className="empty">기록이 없습니다.</div>}
      {history.map(({ dateKey, content }) => (
        <div className="diary-item" key={dateKey}>
          <div className="diary-date">{formatDate(new Date(dateKey))}</div>
          <div>{content}</div>
        </div>
      ))}
    </>
  );
}
export default HistoryView;
