import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { ThemeSwitcher } from "../ThemeSwitcher";
import * as S from "./styles";

export const HeaderMenu = ({ toggleTheme }) => {
  const themeContext = useContext(ThemeContext);

  return (
    <S.Header>
      <S.Container>
        <S.ExternalLink
          target="_blank"
          href="https://www.showseeker.com"
        >
          <S.Logo src={themeContext.logo} alt="ShowSeeker" />
        </S.ExternalLink>

        <ThemeSwitcher toggleTheme={toggleTheme} />
      </S.Container>
    </S.Header>
  )
};
