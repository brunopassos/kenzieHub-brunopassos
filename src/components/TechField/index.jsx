import {AiFillEdit, AiFillDelete} from "react-icons/ai";
import { StyledLi, StyledUl } from "./styles";

function TechField({ techs }) {
  return (
    <div>
      {!techs ? (
        <span>Clique no + e cadastre as suas tecnologias!</span>
      ) : (
        <StyledUl>
          {techs.map((item) => {
            return <StyledLi key={item.id}><div><p>{item.title}</p></div><div><span>{item.status}</span></div><div><button><AiFillEdit/></button><button><AiFillDelete/></button></div></StyledLi>;
          })}
        </StyledUl>
      )}
    </div>
  );
}

export default TechField;
