import { useState } from "react";

const STORAGE_KEY = "diary";

// 일기 데이터: { "2026-08-18": "일기 내용", ... }
export type Diary = Record<string, string>;

// 일기 조회/저장 로직을 한 곳에 모은 커스텀 훅.
// 상태와 localStorage를 함께 갱신해서 화면과 저장소가 어긋나지 않게 한다.
export function useDiary() {
  const [diary, setDiary] = useState<Diary>(() =>
    JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "{}")
  );

  const saveDiary = (dateKey: string, content: string) => {
    const next = { ...diary, [dateKey]: content };
    setDiary(next);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  return { diary, saveDiary };
}
