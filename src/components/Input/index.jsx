import * as S from "./styles";

export const Input = ({ 
  label,
  value,
  handleSubmit,
  setInputValue
}) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  }

  return (
    <S.InputWrapper>
      <S.Label for="date-input">{label}</S.Label>
      <S.Input 
        type="text"
        value={value}
        id="date-input"
        maxLength={256}
        name="date-input"
        onKeyDown={e => handleKeyDown(e)}
        placeholder="Type the desired dates"
        onChange={e => setInputValue(e.target.value)}
      />
    </S.InputWrapper>
  )
}