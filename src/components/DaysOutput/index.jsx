import * as S from "./styles";

export const DaysOutput = ({ selectedDays }) => {
  const orderedNumbers = selectedDays.sort((a, b) => a - b);

  return (
    <S.Wrapper>
      <S.Title>Selected days</S.Title>
      <S.NumbersWrapper>
        {orderedNumbers.length === 0 ?
          <S.Placeholder />
        : orderedNumbers.map(number => {
          const isInvalid = number === 0;

          return isInvalid ? <S.Error>Invalid date</S.Error> : <S.Number key={`selected-day-${number}`}>{number}</S.Number>
        })}
      </S.NumbersWrapper>
    </S.Wrapper>
  )
}