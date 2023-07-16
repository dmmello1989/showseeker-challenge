import styled from "styled-components";

export const Main = styled.div`
  min-width: 100dvw;
  min-height: 100dvh;
  background-color: ${props => props.theme.body};
  transition: background-color .3s;

  @media (max-width: 767px) {
    padding-bottom: 28px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1246px;
  height: 100%;
  margin: 0 auto;
`;
