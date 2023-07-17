import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as S from "./styles";

export const DaysOutput = ({ selectedDays }) => {
  const [showNumbers, setShowNumbers] = useState(false);
  const orderedNumbers = selectedDays.sort((a, b) => a - b);
  const hasError = orderedNumbers.includes(0);
  
  const showErrorToast = useCallback(() => {
    toast.error(
      <>
        <strong>Invalid day(s)</strong>
        <br />
        Please, check your input values and try again.
      </>,
      {
        position: toast.POSITION.TOP_CENTER,
        theme: "colored",
      }
    );
  }, []);

  useEffect(() => {
    if (hasError) {
      showErrorToast();
    }
  }, [hasError, showErrorToast]);

  useEffect(() => {
    setShowNumbers(false);
    // Delay the animation for a short period to reset the fade-in effect
    const resetAnimation = setTimeout(() => {
      setShowNumbers(true);
    }, 10);

    return () => clearTimeout(resetAnimation);
  }, [selectedDays]);

  return (
    <S.Wrapper>
      <S.Title>Selected days</S.Title>
      <S.NumbersWrapper>
        {orderedNumbers.length === 0 ?
        <S.Placeholder>No days selected.</S.Placeholder> :
        hasError ?
          <S.Error>Invalid date</S.Error>
        : orderedNumbers.map((number, index) => {
          return <S.Number key={`selected-day-${number}`} show={showNumbers} index={index}>{number}</S.Number>
        })}
      </S.NumbersWrapper>
    </S.Wrapper>
  )
}