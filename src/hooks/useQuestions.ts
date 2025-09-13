import { useEffect, useState } from "react";

export function useQuestions() {
  const [questions, setQuestions] = useState();

  useEffect(() => {
    fetch("/questions.json")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
      });
  }, []);

  return questions;
}
