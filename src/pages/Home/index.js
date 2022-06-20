import Input from "../../components/Input";
import Logo from "../../components/Logo";
import { Container, Content } from "./styles";
import Button from "../../components/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";

function Home() {

  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email(),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmitFunction(data) {
    api
      .post("/sessions", data)
      .then((resp) => {
        console.log(resp.data.token)
        localStorage.setItem("token", JSON.stringify(resp.data.token));
        localStorage.setItem("id", resp.data.user.id);
        toast.success(`Seja bem vindo(a) ${resp.data.user.name}`)
        return history.push(`/dashboard/${resp.data.user.name}`)
      })
      .catch((err) => {
        toast.error(`Usuário não cadastrado`)
        console.log(err);
      });
  }

  

  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <>
      <Logo />
      <Container>
        <h2>Login</h2>
        <Content onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            error={errors.email?.message}
            register={register}
            name="email"
            placeholderText="Digite o seu email"
            children="Email"
            type="text"
          />
          <Input
            error={errors.password?.message}
            register={register}
            name="password"
            placeholderText="Digite a sua senha"
            children="Senha"
            type="password"
          />
          <Button type="submit" bgColor={"--color-primary"}>
            Entrar
          </Button>
        </Content>
        <div>
          <span>Ainda não tem uma conta?</span>
          <Button
            onClick={handleNavigation}
            path="/register"
            bgColor={"--gray1"}
            textColor={"--gray0"}
          >
            Cadastre-se
          </Button>
        </div>
      </Container>
    </>
  );
}

export default Home;
