import styled from "styled-components";

export const StyledUl = styled.ul`
  padding-top: 20px;
  height: 330px;
  overflow-y: auto;
  background-color: var(--gray3);
  border-radius: 4px;
`;

export const StyledLi = styled.li`
  list-style: none;
  width: 279px;
  height: 48.73px;
  background-color: var(--gray4);
  margin: 12px 8px;
  border-radius: 4.06066px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  :hover {
    background-color: var(--gray2);
  }

  div {
    width: 33%;
  }

  div + div {
    display: flex;
    justify-content: center;
  }

  div + div + div {
    display: flex;
    justify-content: end;
  }

  div button {
    margin-top: 20px;
    width: 20px;
    height: 20px;
    margin-right: 5px;
    background-color: var(--gray4);
    border: none;
    color: var(--white);
  }

  div p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14.2123px;
    color: var(--gray0);
    padding-left: 10px;
  }

  div span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    color: var(--gray1);
  }
`;

export const StyledInput = styled.input`
  width: 263.76px;
  height: 38.37px;
  background-color: var(--gray2);
  border: 0.973899px solid var(--gray2);
  border-radius: 3.19783px;
  padding: 0px 12.9853px;
  font-family: "Inter";
  font-weight: 400;
  font-size: 12.9853px;
  color: var(--gray1);
  margin-bottom: 15px;
  display: flex;
  align-items: center;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 10px;

  label {
    margin-bottom: 15px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 9.73899px;
    color: var(--gray0);
  }

  select {
    margin-bottom: 15px;
    padding: 0px 12.9853px;
    width: 263.76px;
    height: 38.37px;
    border: 0.973899px solid var(--gray2);
    border-radius: 3.19783px;
    background-color: var(--gray2);
    color: var(--gray1);
  }

  div {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    button + button {
      width: 78.35px;
      height: 38.37px;
      background: var(--gray1);
      border: 1.2182px solid var(--gray1);
      border-radius: 4px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 12.7913px;
    }
    button {
      width: 163.09px;
      height: 38.37px;
      background: var(--color-primary-Negative);
      border: 1.2182px solid var(--color-primary-Negative);
      border-radius: 4px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 12.7913px;
    }
  }
`;
