-- 할 일 노트의 todos 표 — Supabase 대시보드 SQL Editor에 통째로 붙여 넣고 Run을 누릅니다

-- 1. 표 만들기 : 할 일 하나가 한 줄(행), 줄마다 주인(user_id)을 적습니다
create table public.todos (
  id bigint generated always as identity primary key,              -- 줄 번호 (데이터베이스가 1, 2, 3 … 붙임)
  user_id uuid not null references auth.users on delete cascade,   -- 주인 — 가입한 사람 표(auth.users)의 id
  text text not null,                                              -- 할 일 글
  done boolean not null default false,                             -- 끝냈는지 (처음엔 false)
  created_at timestamptz not null default now()                    -- 적은 때 (처음엔 지금)
);

-- 2. 로그인한 사람(authenticated)에게 표를 읽고 · 넣고 · 고치고 · 지우는 것을 허락합니다
grant select, insert, update, delete on table public.todos to authenticated;

-- 3. 행 보안(RLS) 켜기 — 켜면 아래 정책이 허락한 줄만 오갑니다
alter table public.todos enable row level security;

-- 4. 정책 : 요청한 사람의 id((select auth.uid()))와 그 줄의 user_id가 같을 때만
create policy "내 할 일 읽기" on public.todos
  for select to authenticated
  using ((select auth.uid()) = user_id);

create policy "내 할 일 넣기" on public.todos
  for insert to authenticated
  with check ((select auth.uid()) = user_id);

create policy "내 할 일 고치기" on public.todos
  for update to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

create policy "내 할 일 지우기" on public.todos
  for delete to authenticated
  using ((select auth.uid()) = user_id);
