import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    
    flex-direction: column;
    gap: 12px;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
   
    

    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.mainText} ;
     
`

export const Span = styled(motion.span)`
    margin-top: 2rem;
    font-size: 1.5rem;
`

export const Topics = styled(motion.li)`
    font-size: 1rem;
    align-items: center;
    justify-content: center;
`