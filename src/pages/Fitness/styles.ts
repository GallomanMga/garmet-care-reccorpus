import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    font-size: 1rem;

    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.mainText} ;
     
    span {
        margin-top: 2rem;
        font-size: 1.5rem;
    }
`

export const Topics = styled.li`
    font-size: 1rem;
   
`