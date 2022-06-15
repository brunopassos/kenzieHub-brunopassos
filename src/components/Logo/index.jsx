import logo from "../../assets/logo.svg";
import { StyledImg, Container } from "./styles";

function Logo() {
    return (
        <Container>
            <StyledImg src={logo} alt="" />
        </Container>
    );
}

export default Logo;