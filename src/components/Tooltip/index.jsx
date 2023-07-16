import * as S from "./styles";

export const Tooltip = ({ text, isActive }) => {
  return (
    <S.Tooltip isActive={isActive} dangerouslySetInnerHTML={{ __html: text }} />
  )
}