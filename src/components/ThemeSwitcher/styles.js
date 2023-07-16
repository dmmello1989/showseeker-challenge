import styled from "styled-components";

export const Input = styled.input`
  width: 0;
  height: 0;
  visibility: hidden;

  &:checked + label { 
    &:after {
      left: calc(100% - 5px); 
      transform: translateX(-100%);
    }
  }
`;

export const Label = styled.label`
  position: relative;
  width: 55px;
  height: 30px;
  margin-left: auto;
  border-radius: 100px;
  background-color: ${props => props.theme.switcher};
  cursor: pointer;

  &:after {
    position: absolute;
    top: 50%;
    left: 8px;
    content: '';
    background: ${props => props.theme.white};
    width: 20px;
    height: 20px; 
    border-radius: 50%;
    transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
    transform: ${props => props.isToggled ? "translate(22px, -50%)" : "translate(0, -50%)"};
  }
`;
