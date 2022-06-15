import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 80vw;
  background: var(--gray3);
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  border-radius: 3.20867px;

  @media (min-width: 400px) {
    width: 310px;
  }

  h2 {
    color: var(--gray0);
    font-family: "Inter";
    font-weight: 700;
    font-size: 14.439px;
    margin-top: 12px;
    margin-bottom: 5px;
  }

  span {
    color: var(--gray1);
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 9.59437px;
    margin-bottom: 22px;
  }
`;

export const Content = styled.form`
  max-width: 369px;
  display: flex;
  flex-direction: column;

  input {
    width: 264.66px;
    height: 38.5px;
    border: 0.9772px solid var(--gray0);
    border-radius: 3.20867px;
    color: var(--gray0);
    background-color: var(--gray2);
    font-family: "Inter";
    font-weight: 400;
    font-size: 13.0293px;
    margin-bottom: 22px;
    padding-left: 13px;
  }

  label {
    color: var(--gray0);
    font-weight: 400;
    font-size: 9.772px;
    font-family: "Inter";
    margin-bottom: 18px;
  }

  button {
    width: 265px;
    height: 38.5px;
    font-family: "Inter";
    font-weight: 500;
    font-size: 12.8347px;
    margin-bottom: 27px;
  }

  span {
    font-family: "Inter";
    font-weight: 600;
    font-size: 9.62602px;
    color: var(--gray1);
    margin-bottom: 26px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    width: 79.54px;
    height: 31.95px;
    border-radius: 4px;
    font-family: "Inter";
    font-weight: 600;
    font-size: 9.59437px;
    margin-bottom: 25px;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`