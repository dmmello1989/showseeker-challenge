import styled from "styled-components";

export const Title = styled.h1`
  color: #0b0a33;
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  font-family: "Thicccboi", sans-serif;

  @media (max-width: 767px) {
    font-size: 28px;
  }
`;

export const Text = styled.p`
  color: #7a7d9c;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  font-family: "Thicccboi", sans-serif;

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
  border: 1px solid #eff0f6;
  background-color: #ffffff;
  box-shadow: 0 6px 12px rgba(20, 20, 42, 0.04);

  @media (max-width: 767px) {
    margin: 32px 16px;
    padding: 40px 25px;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: flex-end;
`;