// 제네릭 예시
export function getFirstItem<T>(items: T[]): T {
    return items[0];
}

export const firstString = getFirstItem<string>(["a", "b"]); // "a"
export const firstNumber = getFirstItem<number>([1, 2]); // 1
