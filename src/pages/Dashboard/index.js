import Logo from "../../components/Logo";
import Button from "../../components/Button";
import { Container, Content, Header, StyledForm } from "./styles";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { AiFillPlusSquare } from "react-icons/ai";
import { useEffect } from "react";
import TechField from "../../components/TechField";
import ReactModal from 'react-modal';
import Input from "../../components/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";



function Dashboard() {

  const [open, setOpen] = useState(false);  
  const [techs, setTechs] = useState([]);

  const params = useParams();

  const [userData, setUserData] = useState({});

  useEffect(() => {
    api.get(`/users/${localStorage.getItem("id")}`).then((resp) => {
      setUserData(resp.data)
      setTechs(resp.data.techs)
    }).catch((err) => {
      console.log(err);
    })
  }, [techs]);

  const history = useHistory();

  const handleNavigation = (path) => {
    localStorage.clear();
    toast.success("Deslogado com sucesso.")
    return history.push(path);
  };

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Campo obrigatório")
  })

  const {register, handleSubmit, formState: { errors }} = useForm({
      resolver: yupResolver(schema),
  });

  function onSubmitFunction(data){ 
    console.log(data)
    api
    .post("/users/techs", data, {
      headers: {
        'authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`
      }
    })
    .then((_) => {
        toast.success("Tecnologia cadastrada com sucesso!");
        setOpen(!open);
    })
    .catch((err) => {
        console.log(err)
        toast.error("Erro ao cadastrar, tente novamente!");
    });
  }

  

  const styleDiv = {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    height: "40.11px",
    alignItems: "center",
    background: "var(--gray2)",
    color: "var(--gray0)",
    fontSize: "11.2304px",
    fontFamily: "Inter",
    fontWeigth: "400"   
  }

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
            <button onClick={() => setOpen(!open)}>
              +
            </button>
        </Content>
            <TechField techs={techs}/>
      </Container>
      <ReactModal portalClassName="modal" isOpen={open} onRequestClose={() => setOpen(!open)} ariaHideApp={false}
        style={{
          content: {
            backgroundColor: "var(--gray3)",
            height: "300px",
            margin: "120px auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0",
            width: "295px"
          },
          overlay: {
            background: "rgba(18, 18, 20, 0.5)"
          }
        }}
      >        
        <div style={styleDiv}>
          <span>Cadastrar tecnologia</span>
          <Button bgColor={"--gray2"} textColor={"--gray1"} onClick={() => setOpen(!open)}>x</Button>
        </div>
        <StyledForm onSubmit={handleSubmit(onSubmitFunction)} >
          <Input error={errors.title?.message}  children={"Nome"} placeholderText={"JavaScript"} type={"text"} name={"title"} register={register} />
          <label>Selecionar Status</label>
          <select {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <Button bgColor={"--color-primary"}>Cadastrar Tecnologia</Button>
        </StyledForm>
      </ReactModal>
    </>
  );
}

export default Dashboard;
