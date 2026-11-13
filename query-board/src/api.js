// 주소(url)에서 JSON을 받는 함수 — useFetch 안에 있던 줄과 같음
// 실패면 throw — useQuery가 error로 받음
export async function getJSON(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${response.status} 오류`);
  }
  return response.json();
}
