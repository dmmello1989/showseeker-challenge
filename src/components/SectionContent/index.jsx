import * as S from "./styles.js";
import { Input } from "../Input";
import { Button } from "../Button";
import { DaysOutput } from "../DaysOutput";
import { useDateHandler } from "../../hooks/useDateHandler.js";

export const SectionContent = () => {
  const {
    inputValue,
    selectedDays,
    handleSubmit,
    setInputValue,
  } = useDateHandler();

  return (
    <>
      <S.Title>ShowSeeker Frontend Challenge</S.Title>
      <S.Text>Solution by Daniel Mello</S.Text>
      <S.Card>
        <S.Form>
          <Input 
            value={inputValue}
            label="Insert days"
            handleSubmit={handleSubmit}
            setInputValue={setInputValue} 
          />
          <Button 
            type="submit"
            text="Submit"
            handleSubmit={handleSubmit}
          />
        </S.Form>

        <DaysOutput selectedDays={selectedDays} />
      </S.Card>
    </>
  )
}