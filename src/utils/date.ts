// Date 객체를 사람이 읽는 형태("2026년 8월 18일")로 변환한다.
export function formatDate(date: Date): string {
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
}

// 저장소 키로 쓰는 형태("2026-08-18")로 변환한다.
// 자릿수를 맞춰야 문자열 정렬이 곧 날짜 정렬이 된다.
export function toDateKey(date: Date): string {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}
