import styled from "styled-components";

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  font-family: "Thicccboi", sans-serif;
  color: ${props => props.theme.darkText};
  transition: color .3s;

  @media (max-width: 767px) {
    font-size: 28px;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  font-family: "Thicccboi", sans-serif;
  color: ${props => props.theme.lightGrey};
  transition: color .3s;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 64px;
  padding: 42px;
  border-radius: 20px;
  border: 1px solid ${props => props.theme.border};
  background-color: ${props => props.theme.white};
  box-shadow: 0 6px 12px rgba(20, 20, 42, 0.04);
  transition: background-color .3s, border .3s;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    max-width: 355px;
    margin: 32px auto;
    padding: 40px 25px;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: flex-end;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;