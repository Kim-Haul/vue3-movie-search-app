- MBTI 검사 페이지 추가 예정
- 성격 유형에 따른 영화 장르 추천
- 추가 컴포넌트 구성 예정

<br/>

**페이지 상단부**
![logo](./images/main1.png)

<br/>

**페이지 하단부**
![logo](./images/main2.png)

<br/>

## Installation

```bash
# Default.
$ npx degit ParkYoungWoong/vue3-webpack-template DIRECTORY_NAME

# With ESLint, Add `#eslint`.
$ npx degit ParkYoungWoong/vue3-webpack-template#eslint DIRECTORY_NAME

# With ESLint + Vuex, Add `#vuex`.
$ npx degit ParkYoungWoong/vue3-webpack-template#vuex DIRECTORY_NAME

# With ESLint + Vuex + VueRouter, Add `#vue-router`.
$ npx degit ParkYoungWoong/vue3-webpack-template#vue-router DIRECTORY_NAME

# Start!
$ cd DIRECTORY_NAME
$ npm i
$ npm run dev
```

## Specs

- Vue3
- Webpack
- SCSS
- Babel
- PostCSS
- Autoprefixer
- ESLint **(+ESLint)**
- Vuex **(+Vuex)**
- Vue Router **(+VueRouter)**

## Packages

**webpack**: 모듈(패키지) 번들러의 핵심 패키지<br>
**webpack-cli**: 터미널에서 Webpack 명령(CLI)을 사용할 수 있음<br>
**webpack-dev-server**: 개발용으로 Live Server를 실행(HMR)<br>

**html-webpack-plugin**: 최초 실행될 HTML 파일(템플릿)을 연결<br>
**copy-webpack-plugin**: 정적 파일(파비콘, 이미지 등)을 제품(`dist`) 폴더로 복사<br>

**sass-loader**: SCSS(Sass) 파일을 로드<br>
**postcss-loader**: PostCSS(Autoprefixer)로 스타일 파일을 처리<br>
**css-loader**: CSS 파일을 로드<br>
**style-loader**: 로드된 스타일(CSS)을 `<style>`로 `<head>`에 삽입<br>
**babel-loader**: JS 파일을 로드<br>
**vue-loader**: Vue 파일을 로드<br>
**vue-style-loader**: Vue 파일의 로드된 스타일(CSS)을 `<style>`로 `<head>`에 삽입<br>
**file-loader**: 지정된 파일(이미지)을 로드<br>

**@babel/core**: ES6 이상의 코드를 ES5 이하 버전으로 변환<br>
**@babel/preset-env**: Babel 지원 스펙을 지정<br>
**@babel/plugin-transform-runtime**: Async/Await 문법 지원<br>

**sass**: SCSS(Sass) 문법을 해석(스타일 전처리기)<br>
**postcss**: Autoprefixer 등의 다양한 스타일 후처리기 패키지<br>
**autoprefixer**: 스타일에 자동으로 공급 업체 접두사(Vendor prefix)를 적용하는 PostCSS의 플러그인<br>

**vue**: Vue.js 프레임워크<br>
**@vue/compiler-sfc**: .vue 파일(SFC, 3버전)을 해석<br>

**eslint**: 정적 코드 분석 도구 **(+ESLint)**<br>
**eslint-plugin-vue**: Vue.js 코드 분석 **(+ESLint)**<br>
**babel-eslint**: ES6 이상의 코드(Babel)를 분석 **(+ESLint)**<br>

**vuex**: 중앙 집중식 저장소 **(+Vuex)**<br>
**vue-router**: 라우터 **(+VueRouter)**<br>
