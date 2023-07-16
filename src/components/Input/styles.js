import styled from "styled-components";

export const InputWrapper = styled.div`
  @media (max-width: 767px) {
    width: 100%;
  }
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
  color: ${props => props.theme.darkText};
  transition: color .3s;

  @media (max-width: 767px) {
    font-size: 22px;
  }
`;

export const Input = styled.input`
  width: 100%;
  min-height: 73px;
  padding: 8px 32px;
  color: ${props => props.theme.darkText};
  background-color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.border};
  border-radius: 64px;
  font-size: 18px;
  font-weight: 500;
  font-family: "Thicccboi";
  line-height: 1.111em;
  box-shadow: 0 2px 8px rgba(27, 25, 121, 0.05);
  transition: all .3s;
  
  &:focus-visible {
    outline: 1px solid ${props => props.theme.lightBlue};
  }

  &:focus,
  &:hover {
    color: ${props => props.theme.darkText};
    border-color: ${props => props.theme.lightBlue};
    box-shadow: 0 0 0 rgba(27, 25, 121, 0.05);
  }

  @media (max-width: 767px) {
    padding: 8px 25px;
  }
`;