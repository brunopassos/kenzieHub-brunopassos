import Input from "../../components/Input";
import Logo from "../../components/Logo";
import { Container, Content, StyledHeader, MainContainer } from "./styles";
import Button from "../../components/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";
//import Select from "../../components/Select";

function Register() {

    const history = useHistory();

    function handleNavigation(path){
        return history.push(path);
    }

    const schema = yup.object().shape({
        name: yup.string().required("Campo obrigatório").min(3, "Mínimo de 3 letras"),
        email: yup.string().required("Campo obrigatório").email(),
        password: yup.string().required("Campo obrigatório"),
        confirmPassword: yup.string().required("Campo obrigatório").oneOf([yup.ref("password")],"As senhas não conferem"),
        bio: yup.string().required("Campo obrigatório"),
        contact: yup.string().required("Campo obrigatório"),
        course_module: yup.string().required("Campo obrigatório")
    })

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmitFunction(data){        

        api
        .post("/users", data)
        .then((resp) => {
            toast.success("Sucesso ao criar a conta!");
            return history.push("/")
        })
        .catch((err) => {
            console.log(err)
            toast.error("Erro ao criar a conta!");
        });
    }

    return ( 
        <MainContainer>
            <StyledHeader>
                <Logo margin="0"/>
                <Button onClick={() => handleNavigation("/")} bgColor={"--gray3"} textColor={"--gray0"}>Voltar</Button>
            </StyledHeader>
            <Container >
                    <h2>Crie sua conta</h2>
                    <span>Rápido e grátis, vamos nessa</span>
                <Content onSubmit={handleSubmit(onSubmitFunction)}>   
                    <Input error={errors.name?.message} register={register} name="name" placeholderText="Digite aqui o seu nome" children="Nome" type="text"/>             
                    <Input error={errors.email?.message} register={register} name="email" placeholderText="Digite aqui o seu email" children="Email" type="text"/>
                    <Input error={errors.password?.message} register={register} name="password" placeholderText="Digite aqui a sua senha" children="Senha" type="password"/>
                    <Input error={errors.confirmPassword?.message} register={register} name="confirmPassword" placeholderText="Confirme a seua senha" children="Confirme a senha" type="password"/>
                    <Input error={errors.bio?.message} register={register} name="bio" placeholderText="Fale um pouco sobre você" children="Bio" type="text"/>
                    <Input error={errors.contact?.message} register={register} name="contact" placeholderText="Opção de contato" children="Contato" type="text"/>
                    <label>Selecionar módulo</label>
                    <select {...register("course_module")}>
                        <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                        <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                        <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                        <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
                    </select>
                    {/* <Select register={register} name="course_module" error={errors.course_module?.message}/> */}
                    <Button type="submit" bgColor={"--color-primary-Negative"}>Cadastrar</Button>
                </Content>
            
            </Container>
        </MainContainer>
     )
}

export default Register;