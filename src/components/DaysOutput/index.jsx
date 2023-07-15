import * as S from "./styles";

export const DaysOutput = ({ selectedDays }) => {
  return (
    <S.Wrapper>
      <S.Title>Selected days:</S.Title>
      <S.NumbersWrapper>
        {selectedDays.length === 0 ?
          <S.Placeholder />
        : selectedDays.map(number => (
          <S.Number key={`selected-day-${number}`}>{number}</S.Number>
        ))}
      </S.NumbersWrapper>
    </S.Wrapper>
  )
}