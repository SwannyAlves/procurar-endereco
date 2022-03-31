import styled from "styled-components";

export const CepNaoEncontradoContainer = styled.div`
    max-width: 545px;
    width: 100%;
    height: 515px;
    background-color: #FFFFFF;
    border-radius: 10px;
    padding: 60px;
    margin: auto;
    @media (max-width: 720px) { 
        padding: 30px; 
    }


    hr{
        margin-top: 20px;  
        border-width: 0; 
        height: 1px;
        border-top-width: 1px;
        margin-bottom: 20px;
    }
    #lastLine{
        margin-bottom: 20px;
    }
    span{
        font-weight: bold;
    }
    p{
        padding: 1.875rem 0 0 0;
       text-align: center;
    }
    p:first-child{
        padding-top: 0;
    }
   
`