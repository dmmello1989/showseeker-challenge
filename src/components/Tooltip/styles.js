import styled from "styled-components";

export const Tooltip = styled.div`
  position: absolute;
  bottom: 30px;
  width: 316px;
  padding: 16px;
  font-size: 12px;
  color: ${props => props.theme.darkText};
  background-color: ${props => props.theme.white};
  border: 1px solid #000;
  border-radius: 20px;
  box-shadow: 3px 3px 12px rgba(0,0,0,0.15);
  opacity: 0;
  visibility: hidden;
  transition: all .3s;
  z-index: 3;

  ${props => props.isActive && `
    display: block;
    height: auto;
    opacity: 1;
    visibility: visible;
    transition: opacity .6s, visibility 3s;
  `};

  @media (max-width: 767px) {
    left: -130px;
  }
`;