import * as S from "./styles";

export const Button = ({ text, handleSubmit }) => {
  return (
    <S.Button onClick={handleSubmit}>{text}</S.Button>
  )
}