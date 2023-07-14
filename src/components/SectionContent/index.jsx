import * as S from "./styles.js";
import { Input } from "../Input";

export const SectionContent = () => {
  return (
    <>
      <S.Title>ShowSeeker Frontend Challenge</S.Title>
      <S.Subtitle>Solution made by Daniel Mello</S.Subtitle>
      <S.Card>
        <Input label="Insert dates" />
      </S.Card>
    </>
  )
}