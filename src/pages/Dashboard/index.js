import Logo from "../../components/Logo";
import Button from "../../components/Button";
import { Container, Content, Header } from "./styles";

function Dashboard() {
  return (
    <>
      <Container>
        <div>
          <Logo margin="0"/>
          <Button textColor={"--gray0"} bgColor={"--gray3"}>Sair</Button>
        </div>
        <Header>
            <h2>Olá, Bruno Passos</h2>
            <span>Primeiro módulo (Introduçao ao FrontEnd)</span>
        </Header>
        <Content>
            <span>Tecnologias</span>
            <button></button>
        </Content>
      </Container>
    </>
  );
}

export default Dashboard;
