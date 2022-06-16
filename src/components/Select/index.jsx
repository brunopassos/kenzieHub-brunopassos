import { StyledSelect, StyledP } from "./styles";

function Select({ register, name, error}) {

  return (
    <>
      <label htmlFor="">Selecionar Módulo</label><StyledP>{error}</StyledP>
      <StyledSelect register={register} name={name}>
        <option value="M1">M1</option>
        <option value="M2">M2</option>
        <option value="M3">M3</option>
      </StyledSelect>
    </>
  );
}

export default Select;
