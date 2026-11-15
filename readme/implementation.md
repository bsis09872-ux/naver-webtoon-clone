# 구현 상세

[← README로 돌아가기](../README.md)

<br />

각 항목의 **커밋**은 해당 기능을 구현한 커밋이고, **코드 확인하기**는 현재 코드에서 그 부분의 위치입니다.

- [구조적 마크업](#구조적-마크업)
- [레이아웃 · 반응형](#레이아웃--반응형)
- [웹 접근성 · 가독성](#웹-접근성--가독성)
- [재사용 스타일 구조](#재사용-스타일-구조)

## 구조적 마크업

| 구현 내용 | 커밋 | 코드 확인하기 |
|---|---|---|
| 헤더: `header` › `h1` 로고 · `nav` 서비스 링크 · 검색 `form` | [0bb33c6](https://github.com/bsis09872-ux/naver-webtoon-clone/commit/0bb33c6) | [index.html L21-106](../main-page/index.html#L21-L106) |
| 검색 폼: `form role="search"` + `label` + `input type="search"` + 제출 버튼 | [cb88d08](https://github.com/bsis09872-ux/naver-webtoon-clone/commit/cb88d08) | [index.html L55-66](../main-page/index.html#L55-L66) |
| 본문: `main` › 섹션마다 `section` + `h2` 제목 | [cb88d08](https://github.com/bsis09872-ux/naver-webtoon-clone/commit/cb88d08) | [index.html L107-1099](../main-page/index.html#L107-L1099) |
| 사이드: `aside` › 실시간 순위는 순서가 있는 `ol` 목록 | [73eaced](https://github.com/bsis09872-ux/naver-webtoon-clone/commit/73eaced) | [index.html L859-1097](../main-page/index.html#L859-L1097) |
| 푸터: `footer` › `nav` 바로가기 · 사업자 정보 `address` | [73eaced](https://github.com/bsis09872-ux/naver-webtoon-clone/commit/73eaced) | [index.html L1100-1227](../main-page/index.html#L1100-L1227) |
| 문서 오류 수정: doctype, 닫히지 않은 태그, 클래스명 오타 | [9747e08](https://github.com/bsis09872-ux/naver-webtoon-clone/commit/9747e08) | [index.html L1](../main-page/index.html#L1) |

## 레이아웃 · 반응형

| 구현 내용 | 커밋 | 코드 확인하기 |
|---|---|---|
| 박스 모델: 전역 `box-sizing: border-box` 초기화 | [0bb33c6](https://github.com/bsis09872-ux/naver-webtoon-clone/commit/0bb33c6) | [common.css L51-56](../common.css#L51-L56) |
| Flex: 헤더 브랜드바 · 메뉴 좌우 배치 | [0bb33c6](https://github.com/bsis09872-ux/naver-webtoon-clone/commit/0bb33c6) | [style.css L59-222](../main-page/css/style.css#L59-L222) |
| Flex: 포스터 가로 목록 + 캐러셀 다음 버튼 | [c8c97a7](https://github.com/bsis09872-ux/naver-webtoon-clone/commit/c8c97a7) | [style.css L306-362](../main-page/css/style.css#L306-L362) |
| Grid: 본문 \| aside 2단 배치 | [0f4817b](https://github.com/bsis09872-ux/naver-webtoon-clone/commit/0f4817b) | [style.css L30-44](../main-page/css/style.css#L30-L44) |
| Grid: 이달의 신작 3열 · 베스트도전 2단 · 실시간 순위 행 | [73eaced](https://github.com/bsis09872-ux/naver-webtoon-clone/commit/73eaced) | [style.css L576-677](../main-page/css/style.css#L576-L677) |
| Grid: 푸터 `grid-template-areas` 영역 배치 | [73eaced](https://github.com/bsis09872-ux/naver-webtoon-clone/commit/73eaced) | [style.css L753-870](../main-page/css/style.css#L753-L870) |
| 반응형: 표준 브레이크포인트 — 태블릿(`min-width: 768px and max-width: 1023px`) · 모바일(`max-width: 767px`) | [3ac9359](https://github.com/bsis09872-ux/naver-webtoon-clone/commit/3ac9359) · [2e9b609](https://github.com/bsis09872-ux/naver-webtoon-clone/commit/2e9b609) | [style.css L871-1054](../main-page/css/style.css#L871-L1054) |
| 데스크톱(1024px 이상) 안에서는 미디어 쿼리 없이 유동 처리: `clamp()` 간격 · `auto-fit` 추천 목록 열 수 | [2e9b609](https://github.com/bsis09872-ux/naver-webtoon-clone/commit/2e9b609) | [style.css L30-44](../main-page/css/style.css#L30-L44) · [L626-634](../main-page/css/style.css#L626-L634) |

## 웹 접근성 · 가독성

| 구현 내용 | 커밋 | 코드 확인하기 |
|---|---|---|
| 검색창 `label`을 화면에서 숨기고 스크린리더에만 읽히는 `.sr-only` | [cb88d08](https://github.com/bsis09872-ux/naver-webtoon-clone/commit/cb88d08) | [index.html L56](../main-page/index.html#L56) · [common.css L111-121](../common.css#L111-L121) |
| 여러 `nav`를 구분하는 `aria-label` (콘텐츠 서비스 / 웹툰 메뉴 / 푸터 바로가기) | [cb88d08](https://github.com/bsis09872-ux/naver-webtoon-clone/commit/cb88d08) | [index.html L33](../main-page/index.html#L33) · [L80](../main-page/index.html#L80) · [L1125](../main-page/index.html#L1125) |
| 필터 버튼의 선택 상태를 `aria-pressed`로 전달 | [cb88d08](https://github.com/bsis09872-ux/naver-webtoon-clone/commit/cb88d08) | [index.html L115](../main-page/index.html#L115) |
| 현재 페이지 메뉴(홈)에 `aria-current="page"` | [2e9b609](https://github.com/bsis09872-ux/naver-webtoon-clone/commit/2e9b609) | [index.html L83](../main-page/index.html#L83) |
| 모든 이미지 대체 텍스트(`alt`), 장식 아이콘은 `aria-hidden="true"` | [cb88d08](https://github.com/bsis09872-ux/naver-webtoon-clone/commit/cb88d08) | [index.html L1080](../main-page/index.html#L1080) |
| 키보드 포커스 표시 `:focus-visible` | [cb88d08](https://github.com/bsis09872-ux/naver-webtoon-clone/commit/cb88d08) | [common.css L123-126](../common.css#L123-L126) |
| 검색창 입력 중 테두리 강조 `:focus-within` | [2e9b609](https://github.com/bsis09872-ux/naver-webtoon-clone/commit/2e9b609) | [style.css L133-139](../main-page/css/style.css#L133-L139) |
| 마크업 가독성: 중첩 태그 줄 개행 · 섹션 주석 · 의미 있는 클래스명 | [9601f55](https://github.com/bsis09872-ux/naver-webtoon-clone/commit/9601f55) | [index.html L107-200](../main-page/index.html#L107-L200) |

## 재사용 스타일 구조

| 구현 내용 | 커밋 | 코드 확인하기 |
|---|---|---|
| 디자인 토큰: 색 · 레이아웃 폭 · 간격 · 글자 크기를 `:root` CSS 변수로 관리 | [9601f55](https://github.com/bsis09872-ux/naver-webtoon-clone/commit/9601f55) | [common.css L23-48](../common.css#L23-L48) |
| 목차 주석으로 나눈 스타일 구조 (0~14번 섹션) | [9601f55](https://github.com/bsis09872-ux/naver-webtoon-clone/commit/9601f55) | [style.css L1-18](../main-page/css/style.css#L1-L18) |
| 공통 컴포넌트: `.section_head` · `.filter_list` · `.poster_card` · `.banner` 를 모든 섹션에서 재사용 | [9601f55](https://github.com/bsis09872-ux/naver-webtoon-clone/commit/9601f55) | [style.css L223-560](../main-page/css/style.css#L223-L560) |
| 크기 수정자 클래스: `.poster_lg` / `.poster_md` / `.poster_tall` 변수만 바꿔 같은 카드 재사용 | [9601f55](https://github.com/bsis09872-ux/naver-webtoon-clone/commit/9601f55) | [style.css L334-355](../main-page/css/style.css#L334-L355) |
| 컨테이너 쿼리(`cqw`)로 포스터 크기 자동 계산 → 브레이크포인트에서는 `--poster-count`만 변경 | [3ac9359](https://github.com/bsis09872-ux/naver-webtoon-clone/commit/3ac9359) | [style.css L343-351](../main-page/css/style.css#L343-L351) |
| 태그 컴포넌트 재사용 (`.tag_list` + `.tag_list_lg`), `hidden` 속성으로 노출 태그 선택 | [db8a63f](https://github.com/bsis09872-ux/naver-webtoon-clone/commit/db8a63f) | [style.css L463-476](../main-page/css/style.css#L463-L476) · [index.html L753-857](../main-page/index.html#L753-L857) |
