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

  :hover{
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
