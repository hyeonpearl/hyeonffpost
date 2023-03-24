import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  ::selection {
    background: #89ddff;
  }

  html,
  body {
    font-size: 16px;
    word-break: keep-all;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, Bazier Square,
      Noto Sans KR, Segoe UI, Apple SD Gothic Neo, Roboto, Helvetica Neue, Arial,
      sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
      Noto Color Emoji;
    letter-spacing: -0.3px;
    color: #222;
    padding-bottom: 2rem;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
