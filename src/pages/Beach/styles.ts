import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    padding: 2rem;
    background-color: ${props => props.theme.tertiary};
    color: ${props => props.theme.primary} ;
     
`
export const Span = styled(motion.span)`
    margin-top: 2rem;
    font-size: 2rem;
    font-family: ${props => props.theme.UniformCondensedMedium};

`

export const Topics = styled(motion.li)`
    font-size: 1rem;
    align-items: center;
    justify-content: center;

`

export const TopicsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    align-items: center;
    justify-content: center;
    gap: 20px;
 
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  background-color: ${props => props.theme.tertiary};

`

export const Title = styled.h1`
  font-family: ${props => props.theme.Uniform};
  color: ${props => props.theme.primary};
  font-size: 2rem;
`

export const Subtitle = styled.h2`
  font-family: ${props => props.theme.UniformUltra};
  color: ${props => props.theme.primary};
  font-size: 2rem;
`

export const SpanTitle = styled.span`
font-family: ${props => props.theme.Uniform};
 font-size: 2rem;
`

export const Alert = styled.div`
    display: flex;
    border: 1px solid;
    border-color: ${props => props.theme.primary};
    padding:1rem;
    margin: 0.5rem;
    font-family: ${props => props.theme.uniformbold};

    align-items: center;
    justify-content: center
    

`