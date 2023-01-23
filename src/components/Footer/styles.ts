import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    align-items: center;
    justify-content: center;    

    color: ${props => props.theme.mainText};
    font-size: 1.5rem;
    //gap:1rem;

    img {
        width: 60px;
        height: 60px;
    }
`