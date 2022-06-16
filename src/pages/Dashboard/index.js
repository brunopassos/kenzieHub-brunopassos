import Logo from "../../components/Logo";
import Button from "../../components/Button";
import { Container, Content, Header } from "./styles";
import { useParams } from "react-router-dom";

function Dashboard() {

  const params = useParams();

  return (
    <>
      <Container>
        <div>
          <Logo margin="0"/>
          <Button textColor={"--gray0"} bgColor={"--gray3"}>Sair</Button>
        </div>
        <Header>
            <h2>{`Olá, ${params.id}`}</h2>
            <span></span>
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
