// Date 객체를 사람이 읽는 형태("2026년 8월 18일")로 변환한다.
export function formatDate(date: Date): string {
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
}
