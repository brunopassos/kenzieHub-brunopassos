import logo from "../../assets/logo.svg";
import { StyledImg, Container } from "./styles";

function Logo({margin}) {
    return (
        <Container>
            <StyledImg margin={margin} src={logo} alt="" />
        </Container>
    );
}

export default Logo;