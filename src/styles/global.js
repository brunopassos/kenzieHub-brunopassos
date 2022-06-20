import { createGlobalStyle } from "styled-components";

export const CreateGlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root{
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-Negative: #59323f;
        --gray4: #121214;
        --gray3: #212529;
        --gray2: #343B41;
        --gray1: #868E96;
        --gray0: #F8F9FA;
        --sucess: #3FE864;
        --negative: #E83F5B; 
        --background: #121214;
        --white: #FFFFFF;
        --red: #c53030;
    }

    body{
        background: var(--background);
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
        padding-top: 50px;
    }

    button{
        cursor: pointer;
    }
    
    a{
        text-decoration: none;
    }
`

