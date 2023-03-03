# 포켓몬스터 스칼렛/바이올렛 샘플 메이커
**포켓몬스터 스칼렛/바이올렛**에 등장하는 **포켓몬들의 샘플**을 간단하게 제작하여 **이미지로 저장**할 수 있는 **반응형 웹페이지**  

### 2023.03.01.
#### 디자인
[[Figma]](https://www.figma.com/file/mGNo7yGlRGel3KvtxVLWh2/%ED%8F%AC%EC%BC%93%EB%AA%ACSV-%EC%83%98%ED%94%8C-%EB%A9%94%EC%9D%B4%EC%BB%A4?node-id=0%3A1&t=1Tgm3KTZfxf97tEK-1)  

### 2023.03.02.
#### 디자인
[[Figma]](https://www.figma.com/file/mGNo7yGlRGel3KvtxVLWh2/%ED%8F%AC%EC%BC%93%EB%AA%ACSV-%EC%83%98%ED%94%8C-%EB%A9%94%EC%9D%B4%EC%BB%A4?node-id=0%3A1&t=1Tgm3KTZfxf97tEK-1)  
#### react 개발 환경 구축 및 퍼블리싱
rem : 최상위 요소의 font-size 기준  
em : 상위 요소의 font-size 기준  
반응형 페이지 제작을 위해 *@media (max-width:1000px)\{...\}*을 사용  
모바일 페이지 퍼블리싱 중 기존 모바일 디자인의 폰트 및 요소들이 너무나도 작다는 것을 인지, 기존 디자인과는 조금 다르게 작성  

### 2023.03.03.
#### 타입스크립트로 변경
yarn 실행 오류 해결 : Windows PowerShell 관리자 권한으로 실행 : Set-ExecutionPolicy Unrestricted  
jsx가 실행이 되지 않는 문제 : tsconfig.json : compilerOptions에 "jsx": "preserve" 추가  

#### Stats.tsx
종족값 : 포켓몬이 선택되지 않았을 경우, 모든 값 '-'으로 표기  
개체값 : 최고를 의미하는 'V'는 붉은색, 상관없음을 의미하는 '-'는 흰색, 최저를 의미하는 'X'는 푸른색으로 표기  
노력치 : 값이 0인 경우 '-'으로 표기, 값이 있다면 0에 가까울수록 흰색, 252에 가까울수록 붉은색으로 표기  