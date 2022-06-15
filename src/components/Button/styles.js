import styled from "styled-components";

export const StyledButton = styled.button`
    background-color: var(${(props) => props.bgColor && props.bgColor});
    color: var(${(props) => props.textColor ? props.textColor : "--white"});
    border-radius: 4.06066px;
    border: none;
`