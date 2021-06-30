import styled from 'styled-components';

export const PokemonCard = styled.div`
    width:15em;
    height:10em;
    margin:1em;

    background:white;
    border:1px solid black;
    border-radius:5px;

    display:flex;
    justify-content:center;
    align-items:center;

    :hover{
        background:#dddddd;
        cursor:pointer;
    }
    
`;