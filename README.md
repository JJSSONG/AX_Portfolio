# Song Jeongseop Portfolio

## Vercel 배포 체크리스트

1. Node.js 20+ 사용 (Vercel Project Settings > General > Node.js Version)
2. Build Command: `npm run build`
3. Install Command: `npm install`
4. Framework Preset: Next.js
5. Root Directory: `/` (현재 저장소 루트)

## 로컬 실행

```bash
npm install
npm run dev
```

## 배포 전 점검

```bash
npm run build
```

## SEO

- `src/app/layout.tsx` 메타데이터/OG 설정
- `src/app/robots.ts` robots.txt 자동 생성
- `src/app/sitemap.ts` sitemap.xml 자동 생성

> 도메인이 확정되면 `https://ax-portfolio.vercel.app` 값을 실제 도메인으로 변경하세요.
