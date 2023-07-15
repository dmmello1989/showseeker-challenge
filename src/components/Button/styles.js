import styled from "styled-components";

export const Button = styled.button`
  display: block;
  height: 73px;
  margin-left: 24px;
  padding: 24px 81px;
  color: #ffffff;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.111em;
  border: 0;
  border-radius: 64px;
  background-color: #1a7cd3;
  transform-style: preserve-3d;
  transition: transform .3s, background-color .3s;
  cursor: pointer;

  &:hover {
    background-color: #0b0a33;
    transform: scale3d(.95, .95, 1.01);
  }
`;