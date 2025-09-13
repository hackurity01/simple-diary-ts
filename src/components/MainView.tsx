import { useEffect, useState } from "react";
import "./MainView.css";

interface MainViewProps {
  setView: (view: "main" | "history") => void;
}

const diary = JSON.parse(window.localStorage.getItem("diary") || "{}");

function MainView({ setView }: MainViewProps) {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const today = `${year}년 ${month}월 ${date}일`;

  const [questions, setQuestions] = useState();
  const [input, setInput] = useState(diary[today] || "");

  useEffect(() => {
    fetch("/questions.json")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
      });
  }, []);

  if (!questions) {
    return "loading";
  }

  return (
    <>
      <div className="header">
        <div>{today}</div>
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
      <div className="question">{questions[date]}</div>
      <div className="content">
        <textarea
          value={input}
          onChange={(e) => {
            const value = e.target.value;
            setInput(value);
            window.localStorage.setItem(
              "diary",
              JSON.stringify({ [today]: value })
            );
          }}
        />
      </div>
    </>
  );
}

export default MainView;
