import styled from "styled-components";

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
    }
  }

  span{
    font-family: "Inter";
    color: var(--gray1);
    font-weight: 400;
    font-size: 12px;
  }
`;

export const Header = styled.section`
  display: flex;
  flex-direction: column;
  width: 320px;
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

    svg {
      width: 32px;
      height: 32px;
      color: var(--white);
    }
  }
`;
