import { UserCardContainer, UserDetailsContainer } from "./styles"

function UserCard({user}) {
    return ( 
        <UserCardContainer key={user.id}>
            <UserDetailsContainer>
                <div>
                    <h3>{user.name}</h3>
                    <span>{user.course_module}</span>
                </div>
                <p>Email: {user.email}</p>
            </UserDetailsContainer>

            {user.techs.length > 0 ? <ul>
                {user.techs.map((tech)=>{
                    return <li>
                        <p>{tech.title}</p> | 
                        <span>{tech.status}</span>
                    </li>
                })}
            </ul> : <span>Nenhuma tecnologia foi cadastrada</span>}


            
        </UserCardContainer>
     );
}

export default UserCard;