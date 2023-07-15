import styled from "styled-components";

export const InputWrapper = styled.div`
`;

export const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 16px 8px;
`;

export const TooltipWrapper = styled.div`
  position: relative;
`;

export const Icon = styled.img`
  display: block;
  width: 16px;
  height: 16px;
  margin-left: 24px;
  cursor: pointer;
`;

export const Label = styled.label`
  display: block;
  font-weight: 700;
  font-size: 27px;
`;

export const Input = styled.input`
  min-height: 73px;
  padding: 8px 32px;
  color: #0b0a33;
  background-color: #fff;
  border: 1px solid #eff0f6;
  border-radius: 64px;
  font-size: 18px;
  font-weight: 500;
  font-family: "Thicccboi";
  line-height: 1.111em;
  box-shadow: 0 2px 8px rgba(27, 25, 121, 0.05);
  transition: all .3s;
  
  &:focus-visible {
    outline: 1px solid #1a7cd3;
  }

  &:focus,
  &:hover {
    color: #0b0a33;
    border-color: #1a7cd3;
    box-shadow: 0 0 0 rgba(27, 25, 121, 0.05);
  }

  @media (max-width: 767px) {
    padding: 8px 25px;
  }
`;