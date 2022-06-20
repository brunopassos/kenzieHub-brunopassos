import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { StyledLi, StyledUl, StyledInput, StyledForm } from "./styles";
import api from "../../services/api";
import ReactModal from "react-modal";
import { useState } from "react";
import Button from "../Button";
import { toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";
import { useEffect } from "react";

function TechField({ techs }) {

  

  function deleteTech(id) {

    if(open === true){
      setOpen(false);
    }

    api
      .delete(`users/techs/${id}`)
      .then((_) => toast.success("Tech deletada com sucesso."))
      .catch((err) => console.log(err));
  }

  function editTech(id) {
    setOpen(!open);

    const tech = techs.filter((item) => {
      return item.id === id;
    })    

    localStorage.setItem("title", tech[0].title);
    localStorage.setItem("status", tech[0].status);
    localStorage.setItem("techId", tech[0].id);

  }

  const [open, setOpen] = useState(false);


  const schema = yup.object().shape({
    title: yup.string(),
    status: yup.string().required("Campo obrigatório")
  })

  const {register, handleSubmit, formState: { errors }} = useForm({
      resolver: yupResolver(schema),
  });

  function onSubmitEdit(data){         
    api
    .put(`/users/techs/${localStorage.getItem("techId")}`, data)
    .then((_) => {
        toast.success("Tecnologia atualizada com sucesso!");
        setOpen(!open);
    })
    .catch((err) => {
        console.log(err)
        toast.error("Erro ao atualizar, tente novamente!");
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
    fontWeigth: "400",
  };

  return (
    <div>
      {!techs ? (
        <span>Clique no + e cadastre as suas tecnologias!</span>
      ) : (
        <StyledUl>
          {techs.map((item) => {
            return (
              <StyledLi key={item.id}>
                <div>
                  <p>{item.title}</p>
                </div>
                <div>
                  <span>{item.status}</span>
                </div>
                <div>
                  <button onClick={() => editTech(item.id)}>
                    <AiFillEdit />
                  </button>
                  <button onClick={() => deleteTech(item.id)}>
                    <AiFillDelete />
                  </button>
                </div>
              </StyledLi>
            );
          })}
        </StyledUl>
      )}
      <ReactModal
        portalClassName="modal"
        isOpen={open}
        onRequestClose={() => setOpen(!open)}
        ariaHideApp={false}
        style={{
          content: {
            backgroundColor: "var(--gray3)",
            height: "300px",
            margin: "120px auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0",
            width: "369px"
          },
          overlay: {
            background: "rgba(18, 18, 20, 0.5)",
          },
        }}
      >
        <div style={styleDiv}>
          <span>Tecnologia Detalhes</span>
          <Button
            bgColor={"--gray2"}
            textColor={"--gray1"}
            onClick={() => setOpen(!open)}
          >
            x
          </Button>
        </div>
        <StyledForm onSubmit={handleSubmit(onSubmitEdit)}>
          <label>Nome da tecnologia</label>
          <StyledInput disabled="disabled" defaultValue={localStorage.getItem("title")}/>
          <label>Status</label>
          <select {...register("status")} defaultValue={localStorage.getItem("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <div>
            <Button type="submit" bgColor={"--color-primary"}>Salvar alterações</Button>
            <Button type="submit" bgColor={"--gray1"} onClick={() => deleteTech(localStorage.getItem("techId"))}>Excluir</Button>
          </div>
        </StyledForm>
      </ReactModal>
    </div>
  );
}

export default TechField;
