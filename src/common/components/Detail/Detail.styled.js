import styled from 'styled-components';

export const DetailCard = styled.div`
    max-width:18%; 
    border:1px solid black;
    background:white;
    padding:2em;


    display:flex;
    flex-direction:column;

    margin:auto;
    
    div{
        text-align:center;
    }
    img{
        width:30%;
    }
`;

export const CancelBtn = styled.div`
    position:relative;
    left:95%;
    height:20px;
    width:20px;
    :hover{
        cursor:pointer;
        span{
            background:red;
        }
    }
    span{
        position:absolute;
        top:50%;
        left:20%;
        width:15px;
        height:2px;
        background:black;
        display:block;
        transform-origin:center;

    }
    .left{
        transform:rotate(45deg);
    }
    .right{
        transform:rotate(-45deg);
    }
`;