import styled from 'styled-components';

export const Wrapper = styled.div`
    width:60%;
    text-align:center;
    margin:auto;
    &>img{
        width:60%;
        padding:2em;
    }
`;

export const Grid = styled.div`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
`;