// 배열 타입
let numbers: number[] = [1, 2, 3];
let mixed: (number | string)[] = [1, "two", 3];
numbers.push("four"); // 에러: 타입 불일치
