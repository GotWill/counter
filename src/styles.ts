import styled from "styled-components";

export const Container = styled.div`

 
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   

`;

export const Area = styled.div`
    
    margin-top: 100px;
    width: 300px;
    height: 300px;
    background-color: #F4F4F8;;
    border-radius: 10%;
    -webkit-box-shadow: 4px 13px 11px 6px rgba(153,153,138,0.54); 
box-shadow: 4px 13px 11px 6px rgba(153,153,138,0.54);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
   
`

export const title = styled.h1`
    font-size: 3rem;
    font-weight: bold;
`

export const AreaButtons = styled.div`
display: flex;
justify-content: space-around;
width: 100%;
`

export const ButtonAdd = styled.button`
    padding: 10px 25px;
    background: red;
    border: none;
    border-radius: 10px;
    width: 100px;
    font-size: 2rem;
    color: white;
    cursor: pointer;
`

export const ButtonDec = styled.button`
      padding: 10px 25px;
      background: blue;
      border: none;
      border-radius: 10px;
      width: 100px;
      font-size: 2rem;

      color: white;
      cursor: pointer;

`
