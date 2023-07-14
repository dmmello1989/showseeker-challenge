import Logo from "../../assets/logo.svg";
import * as S from "./styles";

export const HeaderMenu = () => {
  return (
    <S.Header>
      <S.Container>
        <S.ExternalLink
          target="_blank"
          href="https://www.showseeker.com"
        >
          <S.Logo src={Logo} alt="ShowSeeker" />
        </S.ExternalLink>
        <S.ExternalLink
          target="_blank"
          href="https://github.com/dmmello1989"
        >
          Made by Daniel
        </S.ExternalLink>
      </S.Container>
    </S.Header>
  )
};