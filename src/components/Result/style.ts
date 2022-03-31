import styled from "styled-components";

export const ResultContainer = styled.div`
    max-width: 545px;
    width: 100%;
    height: 515px;
    background-color: #FFFFFF;
    border-radius: 10px;
    padding: 60px;
    margin: auto;


    hr{
        margin-top: 20px;  
        border-width: 0; 
	height: 1px;
	border-top-width: 1px      
    }
    #lastLine{
        margin-bottom: 20px;
    }
    span{
        font-weight: bold;
    }
    p{
        padding: 1.875rem 0 0 0;
    }
    p:first-child{
        padding-top: 0;
    }
   
`