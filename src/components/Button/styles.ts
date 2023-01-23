import { motion } from 'framer-motion'
import styled, {css} from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary'

interface ButtonContainerProps {
    variant: ButtonVariant
}


const buttonVariants = {
    primary: '#FF5935',
    secondary: '#00D6B0',
    tertiary: '#534EE1',
    
}


export const ButtonWrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
    
`

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 300px;
  height: 60px;

  border-radius: 10px;
  border: 0;

  ${props => {
    return css
    `background-color: ${buttonVariants[props.variant]}
    `
  } };

  font-size: 1.5rem;
  font-weight: bold;

  color: ${props => props.theme.mainText};

  display: flex;
  align-items: center;
  justify-content:center;
  gap:1rem;

  cursor:pointer;
  &:hover { opacity: 0.7};

  padding:10px;
  margin-bottom: 10px;

  img{
    width:45px;
    height: 45px;
  }

  
`
