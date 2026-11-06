// 옵션 속성 ?:
interface Profile {
  name: string;
  email?: string;
}
type ProfileType = {
  name: string;
  email?: string | null;
};
let profile1: Profile = { name: "Eve" }; // email 생략 가능
let profile2: ProfileType = { name: "Frank", email: null }; // null 허용
