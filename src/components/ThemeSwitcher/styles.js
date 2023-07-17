import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
`;

export const Image = styled.img`
  display: block;
  width: 24px;
  height: 24px;
  margin: 0 12px;
`;

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
  box-shadow: 0 6px 12px rgba(20, 20, 42, 0.04);
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
