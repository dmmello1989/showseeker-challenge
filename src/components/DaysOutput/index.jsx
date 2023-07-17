import { useEffect, useState } from "react";
import * as S from "./styles";

export const DaysOutput = ({ selectedDays }) => {
  const [showNumbers, setShowNumbers] = useState(false);
  const orderedNumbers = selectedDays.sort((a, b) => a - b);

  console.log(orderedNumbers)

  useEffect(() => {
    setShowNumbers(false);
    // Delay the animation for a short period to reset the fade-in effect
    setTimeout(() => {
      setShowNumbers(true);
    }, 10);
  }, [selectedDays]);

  return (
    <S.Wrapper>
      <S.Title>Selected days</S.Title>
      <S.NumbersWrapper>
        {orderedNumbers.includes(0) ?
          <S.Error>Invalid date</S.Error>
        : orderedNumbers.map((number, index) => {
          return <S.Number key={`selected-day-${number}`} show={showNumbers} index={index}>{number}</S.Number>
        })}
      </S.NumbersWrapper>
    </S.Wrapper>
  )
}