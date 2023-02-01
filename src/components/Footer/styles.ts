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
 
    
  /*  img {
        width: 60px;
        height: 60px;
    } */
`

