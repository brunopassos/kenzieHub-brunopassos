import ReactModal from 'react-modal';
import Button from '../Button';
import { useSelector } from 'react-redux';

function Users({setUsersModal, usersModal}) {  

    const users = useSelector(({users}) => users)

    return ( 
        <ReactModal portalClassName="modal" isOpen={usersModal} onRequestClose={() => setUsersModal(!usersModal)} ariaHideApp={false}
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
            overflow: 'scroll'
          },
          overlay: {
            background: "rgba(18, 18, 20, 0.5)",
          }
        }}
      >        
        <div >
          <span>Usuários</span>
          <Button bgColor={"--gray2"} textColor={"--gray1"} onClick={() => setUsersModal(!usersModal)}>x</Button>
        </div>
        <ul>
            {users.map((user)=>{
                return <li key={user.id}>{user.name}</li>
            })}
        </ul>
        
      </ReactModal>
     );
}

export default Users;