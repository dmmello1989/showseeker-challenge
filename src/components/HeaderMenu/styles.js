import styled from "styled-components";

export const Header = styled.header`
  padding: 20px 20px 29px;
  background-color: ${props => props.theme.body};
  transition: background-color .3s;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1246px;
  height: 100%;
  margin: 0 auto;
`;

export const Logo = styled.img`
  display: block;
  width: 250px;
  height: 40px;

  @media (max-width: 767px) {
    width: 150px;
    height: 24px;
  }
`;

export const ExternalLink = styled.a`
  display: block;
  color: ${props => props.theme.darkBlue};
  line-height: 1.125rem;
  text-decoration: none;
  letter-spacing: -.01em;
  transition: color .3s;
  font: 500 18px "Thicccboi";

  &:hover {
    color: ${props => props.theme.lightBlue};
  }
`;

