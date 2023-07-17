import { useState } from "react";
import Sun from "../../assets/sun.png";
import Moon from "../../assets/moon.png";
import * as S from "./styles";

export const ThemeSwitcher = ({ toggleTheme }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    toggleTheme();
    return setIsToggled(!isToggled);
  }

  return (
    <S.Wrapper>
      <S.Image src={Sun} alt="Light Mode" />
      <S.Label htmlFor="theme-switcher" isToggled={isToggled}>
        <S.Input 
          type="checkbox"
          id="theme-switcher"
          checked={isToggled}
          name="theme-switcher"
          onChange={handleToggle}
        />
      </S.Label>
      <S.Image src={Moon} alt="Dark Mode" />
    </S.Wrapper>
  )
}
