import { StyledButton } from "./styles";

function Button({onClick, path, children, bgColor, textColor, type, width}) {
    return ( 
        <StyledButton width={width} onClick={() => onClick && onClick(path)} type={type} bgColor={bgColor} textColor={textColor}>{children}</StyledButton>
     );
}

export default Button;