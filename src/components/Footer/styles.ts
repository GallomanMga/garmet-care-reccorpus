import { motion } from 'framer-motion'
import styled from 'styled-components'



export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
    color: ${props => props.theme.mainText};
    font-size: 1rem;
    font-weight: bold;
    font-family: ${props => props.theme.Uniform};
`

