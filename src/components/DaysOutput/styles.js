import styled from "styled-components";

export const Wrapper = styled.div`
  width: 376px;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  margin-bottom: 24px;

  @media (max-width: 767px) {
    margin-left: 8px;
    font-size: 22px;
  }
`;

export const Placeholder = styled.div`
  
`;

export const NumbersWrapper = styled.div`
  display: flex;
  gap: 0 16px;
  height: 73px;

  @media (max-width: 767px) {
    height: 30px;
  }
`;

export const Error = styled.h2`
  margin: 0 0 0 8px;
  color: #db001b;
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
  color: #ffffff;
  border-radius: 50%;
  background-color: #0b0a33;
  pointer-events: none;

  @media (max-width: 767px) {
    width: 30px;
    height: 30px;
    font-size: 18px;
  }
`;