import { StyledP } from "./styles";

function Input({ children , placeholderText, type, register, name, error}) {
    return ( 
        <>
            <label htmlFor="">{children}</label><StyledP>{error}</StyledP>
            <input {...register(name)} placeholder={placeholderText} type={type}/>            
        </>
     );
}

export default Input;