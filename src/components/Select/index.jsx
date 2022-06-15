import { StyledSelect, StyledP } from "./styles";

function Select({register, name, error}) {
  return (
    <>
      <label htmlFor="">Selecionar Módulo</label><StyledP>{error}</StyledP>
      <StyledSelect register={register} name={name}>
        <option>M1</option>
        <option>M2</option>
        <option>M3</option>
      </StyledSelect>
    </>
  );
}

export default Select;
