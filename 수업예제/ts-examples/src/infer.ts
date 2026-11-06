// 초기값으로 타입 추론
let scores = [90, 85, 95]; // number[] 추론
let student = { name: "Dave", age: 20 }; // { name: string; age: number } 추론
scores.push("100"); // 에러: 타입 불일치
