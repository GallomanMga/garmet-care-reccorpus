import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Icon = styled.img`
    width:45px;
    height: 45px;
    margin-right: 10px;
    align-items: center;
`

export const WrapperContainer = styled.div`
    display: flex;
    width: 80%;
    align-items: right;   
`

export const Container = styled.div`
   display: flex;
   //width: 100%;
   align-items: center;
   justify-content: center;
   
`


export const Content = styled(motion.li)`
    align-items: center;
    font-size: 1rem;
    margin-left: 10px;
`