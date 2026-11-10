import { useEffect, useState } from "react";

// 주소(url)에서 데이터를 받아 오는 커스텀 훅
// App에 있던 상태 셋과 useEffect를 그대로 옮기고, 셋을 돌려줌
export default function useFetch(url) {
  const [data, setData] = useState(null); // 성공 — 받은 데이터
  const [error, setError] = useState(null); // 에러 — 실패한 까닭
  const [loading, setLoading] = useState(true); // 로딩 — 기다리는 중

  useEffect(() => {
    let ignore = false; // 정리되면 true — 늦게 온 답은 버림

    async function load() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`${response.status} 오류`);
        }
        const json = await response.json();
        if (!ignore) setData(json);
      } catch (err) {
        if (!ignore) setError(err);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    load();
    return () => {
      ignore = true;
    };
  }, [url]);

  return { data, error, loading };
}
