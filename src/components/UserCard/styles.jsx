import styled from "styled-components";


export const UserCardContainer = styled.li`
    width: 95%;
    margin: 0px 0px 20px 0px;
    color: var(--gray0);
    border-bottom: 1px dashed var(--gray0);
    padding-left: 10px;
    padding-bottom: 10px;

    li {
        list-style: none;
        display: flex;
        justify-content: space-around;

        p, span{
            width: 40%;
        }
        
    }
`

export const UserDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    

    div{
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        height: 40px;
        justify-content: center;
        
        h3{
            font-size: 15px;
        }

    }

    p{
        height: 40px;
    }

    
`