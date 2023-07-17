import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Wrapper = styled.div`
  width: 376px;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  color: ${props => props.theme.darkText};
  transition: color .3s;

  @media (max-width: 767px) {
    margin-left: 8px;
    font-size: 22px;
  }
`;

export const Placeholder = styled.div`
  font-size: 22px;
  color: ${props => props.theme.lightGrey};
`;

export const NumbersWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0 16px;
  height: 73px;

  @media (max-width: 767px) {
    height: 30px;
  }
`;

export const Error = styled.h2`
  margin: 0 0 0 8px;
  color: ${props => props.theme.errorRed};
  transition: color .3s;
`;

export const Number = styled.div`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.111em;
  color: ${props => props.theme.white};
  border-radius: 50%;
  background-color: ${props => props.theme.darkBlue};
  transition: background-color .3s;
  pointer-events: none;
  opacity: 0;
  animation: ${({ show, index }) => show && css`${fadeIn} 0.5s ease-out ${index * 0.1}s forwards`};

  @media (max-width: 767px) {
    width: 30px;
    height: 30px;
    font-size: 18px;
  }
`;