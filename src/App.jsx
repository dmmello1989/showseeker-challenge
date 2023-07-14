
import { HeaderMenu } from "./components/HeaderMenu/Index";
import { SectionContent } from "./components/SectionContent";
import * as S from "./styles";

function App() {
  return (
    <S.Main>
      <HeaderMenu />
      <S.Container>
        <SectionContent />
      </S.Container>
    </S.Main>
  )
}

export default App
