// 사이트 주소 — Vercel에서 빌드하면 Vercel이 넣어 주는 배포 주소
const domain = process.env.VERCEL_PROJECT_PRODUCTION_URL; // string | undefined

// 주소가 있으면 https://와 붙이고, 없으면(내 컴퓨터) localhost
export const SITE = domain ? `https://${domain}` : "http://localhost:3000";
