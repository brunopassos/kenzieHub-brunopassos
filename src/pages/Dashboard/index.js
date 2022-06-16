import Logo from "../../components/Logo";
import Button from "../../components/Button";
import { Container, Content, Header } from "./styles";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { AiFillPlusSquare } from "react-icons/ai";
import { useEffect } from "react";
import TechField from "../../components/TechField";

function Dashboard() {

  const params = useParams();

  const [userData, setUserData] = useState({});

  useEffect(() => {
    api.get(`/users/${localStorage.getItem("id")}`).then((resp) => {
      setUserData(resp.data)
    }).catch((err) => {
      console.log(err);
    })
  }, []);


  const history = useHistory();

  const handleNavigation = (path) => {
    toast.success("Deslogado com sucesso.")
    return history.push(path);
  };


  return (
    <>
      <Container>
        <div>
          <Logo margin="0"/>
          <Button onClick={handleNavigation} path="/" textColor={"--gray0"} bgColor={"--gray3"}>Sair</Button>
        </div>
        <Header>
            <h2>{`Olá, ${params.id}`}</h2>
            <span>{userData.course_module}</span>
        </Header>
        <Content>
            <span>Tecnologias</span>
            <button>
              <AiFillPlusSquare/>
            </button>
        </Content>
            <TechField techs={userData.techs}/>
      </Container>
    </>
  );
}

export default Dashboard;
