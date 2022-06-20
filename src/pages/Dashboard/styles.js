import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 10px;

  label {
    font-family: "Inter";
    font-weight: 400;
    font-size: 9.772px;
    color: var(--gray0);
    margin-bottom: 20px;
  }

  input,
  select {
    width: 234.66px;
    height: 38.5px;
    border: 0.9772px solid var(--gray0);
    border-radius: 3.20867px;
    background-color: var(--gray2);
    color: var(--gray0);
    padding-left: 10px;
    margin-bottom: 20px;
  }

  button {
    width: 234.9px;
    height: 38.5px;
    border: 1.2182px solid var(--color-primary);
    border-radius: 4.06066px;
    font-family: "Inter";
    font-weight: 500;
    font-size: 12.8347px;

  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 80vw;
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  border-radius: 3.20867px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    button {
      border-radius: 4px;
      width: 55.49px;
      height: 32px;
      margin-bottom: 15px;

      :hover{
        background-color: var(--gray2);
      }
    }
  }

  span {
    font-family: "Inter";
    color: var(--gray1);
    font-weight: 400;
    font-size: 12px;
  }
`;

export const Header = styled.section`
  border-top: 1px solid var(--gray0);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 131px;
  padding-top: 34px;

  h2 {
    color: var(--gray0);
    font-family: "Inter";
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 10px;
  }

  span {
    font-family: "Inter";
    color: var(--gray1);
    font-weight: 400;
    font-size: 12px;
  }

  @media (min-width: 450px){
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Content = styled.div`
  span {
    font-family: "Inter";
    font-weight: 600;
    font-size: 16px;
    color: var(--gray0);
  }

  span + button {
    border-radius: 4px;
    width: 32px;
    height: 32px;
    background: var(--gray3);
    border: none;
    color: var(--white);
    font-size: 30px;

    :hover{
      background-color: var(--gray2);
    }
  }
`;
