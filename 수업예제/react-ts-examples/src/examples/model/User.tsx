// 모델 정보는 별도 파일로
export interface User {
  name: string;
  age: number;
}

export interface UserList {
  users: User[];
  total: number;
  page: number;
  limit: number;
}
