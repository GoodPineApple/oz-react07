// 브라우저 없이 store만 돌려 보기 — 터미널에서 node counter-demo.js
import { configureStore } from "@reduxjs/toolkit";

// reducer — 지금 state와 액션을 받아 다음 state를 돌려주는 함수
function counterReducer(state = { value: 0 }, action) {
  if (action.type === "counter/incremented") {
    return { value: state.value + 1 };
  }
  if (action.type === "counter/decremented") {
    return { value: state.value - 1 };
  }
  return state; // 모르는 액션이면 그대로
}

// store — state를 들고 있는 곳. reducer를 알려 주며 만듭니다
const store = configureStore({ reducer: counterReducer });
console.log("처음", store.getState());

// dispatch할 때마다 불릴 함수를 등록
store.subscribe(() => console.log("dispatch 뒤", store.getState()));

store.dispatch({ type: "counter/incremented" });
store.dispatch({ type: "counter/incremented" });
store.dispatch({ type: "counter/decremented" });
store.dispatch({ type: "counter/reset" }); // reducer가 모르는 액션
