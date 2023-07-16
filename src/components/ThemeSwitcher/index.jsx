import { useState } from "react";
import * as S from "./styles";

export const ThemeSwitcher = ({ toggleTheme }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    toggleTheme();
    return setIsToggled(!isToggled);
  }

  return (
    <S.Label htmlFor="theme-switcher" isToggled={isToggled}>
      <S.Input 
        type="checkbox"
        id="theme-switcher"
        checked={isToggled}
        name="theme-switcher"
        onChange={handleToggle}
      />
    </S.Label>
  )
}
