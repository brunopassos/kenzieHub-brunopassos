import ReactModal from 'react-modal';
import { useState } from 'react';
import Button from '../Button';
import Input from '../Input';

function Users({setUsersModal, usersModal}) {    
    
    return ( 
        <ReactModal portalClassName="modal" isOpen={usersModal} onRequestClose={() => setUsersModal(!usersModal)} ariaHideApp={false}
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
        <div >
          <span>Cadastrar tecnologia</span>
          <Button bgColor={"--gray2"} textColor={"--gray1"} onClick={() => setUsersModal(!usersModal)}>x</Button>
        </div>
        <form>
          <Input  />
          <label>Selecionar Status</label>
          <select >
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <Button bgColor={"--color-primary"}>Cadastrar Tecnologia</Button>
        </form>
      </ReactModal>
     );
}

export default Users;