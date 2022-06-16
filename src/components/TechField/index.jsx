function TechField({techs}) {
    return ( 

        <div>                       
            {techs.length === 0 ? <span>Clique no + e cadastre as suas tecnologias!</span> : <ul><li>{techs}</li></ul>}            
        </div>
     );
}

export default TechField;