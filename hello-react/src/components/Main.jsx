import ProfileCard from "./ProfileCard.jsx";

// 가운데 — 팀 소개 글과 팀원 카드. 발표자와 고르는 함수는 App에서 받아 카드에 넘깁니다
function Main({ presenter, onSelect }) {
  const members = 4;

  return (
    <main className="site-main">
      <h2>팀 소개</h2>
      <p>우리 팀은 {members}명입니다. 기획 · 디자인 · 개발을 나눠 맡았습니다.</p>

      <div className="card-list">
        <ProfileCard
          name="김하늘" role="기획" intro="사용자가 처음 보는 화면부터 정합니다." projects={3}
          presenter={presenter} onSelect={onSelect}
        />
        <ProfileCard
          name="이바다" role="디자인" intro="색과 글꼴로 첫인상을 만듭니다." projects={2}
          presenter={presenter} onSelect={onSelect}
        />
        <ProfileCard
          name="박나무" role="개발" intro="버튼이 눌리는 순간을 코드로 만듭니다." projects={4}
          presenter={presenter} onSelect={onSelect}
        />
        <ProfileCard
          name="최새봄" intro="이번 주에 팀에 들어왔습니다."
          presenter={presenter} onSelect={onSelect}
        />
      </div>
    </main>
  );
}

export default Main;
