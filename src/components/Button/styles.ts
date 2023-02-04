import { motion } from 'framer-motion'
import styled, {css} from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'


export type ButtonVariant = 'primary' | 'secondary' | 'tertiary'


interface ButtonContainerProps {
    variant: ButtonVariant
    textcolor: ButtonVariant
}

const buttonVariants = {
    primary: defaultTheme.primary,
    secondary: defaultTheme.secondary,   
    tertiary: defaultTheme.tertiary
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


  
  border: 1px solid rgba(255,255,0,0.5);
  border-color: ${props => props.theme.secondary};
  
 


  ${props => {
    return css
    `background-color: ${buttonVariants[props.variant]};
     color: ${buttonVariants[props.textcolor]}
    ` 
  } };

  



  font-size: 2.5rem;
  font-family: ${props => props.theme.UniformUltra};


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
