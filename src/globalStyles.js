import { createGlobalStyle } from "styled-components";

import ThicccboiMedium from "./fonts/THICCCBOI-Medium.woff2";
import ThicccboiBold from "./fonts/THICCCBOI-Bold.woff2";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    src: local("Thicccboi"), url(${ThicccboiMedium}) format("woff2");
    font-weight: 500;
    font-style: normal;
    font-family: "Thicccboi";
  }
  @font-face {
    src: local("Thicccboi"), url(${ThicccboiBold}) format("woff2");
    font-weight: 700;
    font-style: normal;
    font-family: "Thicccboi";
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-size: 18px;
    font-family: "Thicccboi";
  }
`;