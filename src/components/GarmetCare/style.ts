import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Icon = styled.img`
    width:45px;
    height: 45px;
    margin-right: 10px;
    align-items: center;
`



export const Container = styled.div`
   display: grid;
   grid-template-columns: auto 2fr;
   width: 40vw;
   align-items: center;
  justify-content: center;

  @media (max-width:600px){
    width: 90vw;
  }
  
`


export const Content = styled(motion.li)`
    align-items: center;
    font-size: 1rem;
    margin-left: 10px;
`