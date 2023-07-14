import * as S from "./styles";

export const Input = ({ label, handleOnChange }) => {
  return (
    <S.InputWrapper>
      <S.Label for="date-input">{label}</S.Label>
      <S.Input 
        type="text"
        id="date-input"
        maxLength={256}
        name="date-input"
        placeholder="Type the desired dates"
        onChange={handleOnChange}
      />
    </S.InputWrapper>
  )
}