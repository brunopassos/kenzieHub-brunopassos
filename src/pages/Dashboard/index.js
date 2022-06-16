import Logo from "../../components/Logo";
import Button from "../../components/Button";
import { Container, Content, Header } from "./styles";
import { useParams } from "react-router-dom";
import axios from "axios";
import api from "../../services/api";
import { useState } from "react";

function Dashboard() {

  const params = useParams();

  const [userData, setUserData] = useState({});

  function onDashboardLoad(){
    api.get(`/users/${localStorage.getItem("id")}`).then((resp) => {
      setUserData(resp.data)
    }).catch((err) => {
      console.log(err);
    })
  }

  onDashboardLoad();

  return (
    <>
      <Container>
        <div>
          <Logo margin="0"/>
          <Button textColor={"--gray0"} bgColor={"--gray3"}>Sair</Button>
        </div>
        <Header>
            <h2>{`Olá, ${params.id}`}</h2>
            <span>{userData.course_module}</span>
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
