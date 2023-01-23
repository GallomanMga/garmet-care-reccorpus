import styled from 'styled-components'

export const Container = styled.div`
    display: flex;

    margin-top: 20px;

    
    align-items: center;
    justify-content: center;

    

    color: ${props => props.theme.mainText};
    font-size: 1.5rem;
    gap:2rem;

    img {
        width: 60px;
        height: 65px;
    }
`