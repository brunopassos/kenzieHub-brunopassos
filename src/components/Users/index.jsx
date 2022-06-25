import ReactModal from "react-modal";
import Button from "../Button";
import { useSelector } from "react-redux";
import UserCard from "../UserCard";
import { StyledUl, Title } from "./styles"

function Users({ setUsersModal, usersModal }) {
  const users = useSelector(({ users }) => users);

  return (
    <ReactModal
      portalClassName="modal"
      isOpen={usersModal}
      onRequestClose={() => setUsersModal(!usersModal)}
      ariaHideApp={false}
      style={{
        content: {
          backgroundColor: "var(--gray3)",
          height: "90vh",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0",
          width: "295px",
          overflowY: "auto",
        },
        overlay: {
          background: "rgba(18, 18, 20, 0.5)",
        },
      }}
    >
      <div>
        <Title>Usuários</Title>
        <Button
          bgColor={"--white"}
          textColor={"--black"}
          onClick={() => setUsersModal(!usersModal)}
          width={"50"}
        >
          x
        </Button>
      </div>
      <StyledUl>
        {users.map((user) => {
          if (user.id !== localStorage.getItem("id")) {
            return <UserCard user={user}/>;
          }
        })}
      </StyledUl>
    </ReactModal>
  );
}

export default Users;
