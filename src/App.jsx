import { useState } from "react";
import { ThemeProvider } from "styled-components";

import { HeaderMenu } from "./components/HeaderMenu/Index";
import { SectionContent } from "./components/SectionContent";
import light from './themes/light.js'
import dark from './themes/dark.js'
import * as S from "./styles";

const App = () => {
  const [theme, setTheme] = useState("light");
  const isLightMode = theme === "light";

  const toggleTheme = () => {
    return setTheme(isLightMode ? "dark" : "light");
  }

  return (
    <ThemeProvider theme={isLightMode ? light : dark}>
      <S.Main>
        <HeaderMenu toggleTheme={toggleTheme} />
        <S.Container>
          <SectionContent />
        </S.Container>
      </S.Main>
    </ThemeProvider>
  )
}

export default App
