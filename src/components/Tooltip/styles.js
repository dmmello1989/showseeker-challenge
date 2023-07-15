import styled from "styled-components";

export const Tooltip = styled.div`
  position: absolute;
  bottom: 30px;
  /* display: none; */
  /* height: 0; */
  width: 316px;
  padding: 16px;
  font-size: 12px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 20px;
  box-shadow: 3px 3px 12px rgba(0,0,0,0.15);
  opacity: 0;
  visibility: hidden;
  transition: opacity .3s, visibility .3s;
  z-index: 3;

  ${props => props.isActive && `
    display: block;
    height: auto;
    opacity: 1;
    visibility: visible;
    transition: opacity .6s, visibility 3s;
  `};
`;