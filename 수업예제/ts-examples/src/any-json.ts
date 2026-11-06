// DAY 13 도전과제 cafe.js — JSON.parse가 돌려주는 값은 any
const response = '{"cafe":"오즈 카페","menu":[{"name":"아메리카노","price":3000}]}';
const data = JSON.parse(response); // any — 검사하지 않음
console.log(data.menuu.length); // 오타인데 tsc는 통과
