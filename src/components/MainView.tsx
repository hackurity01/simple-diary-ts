import { useEffect, useState } from "react";
import type { View } from "../App";
import { formatDate } from "../utils/date";
import "./MainView.css";

interface MainViewProps {
  setView: (view: View) => void;
}

function MainView({ setView }: MainViewProps) {
  const today = new Date();

  // 질문 목록: 서버에서 받아오기 전까지는 undefined
  const [questions, setQuestions] = useState<Record<string, string>>();

  useEffect(() => {
    fetch("/questions.json")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
      });
  }, []);

  if (!questions) {
    return <p className="loading">질문을 불러오는 중...</p>;
  }

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
      <div className="question">{questions[today.getDate()]}</div>
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
