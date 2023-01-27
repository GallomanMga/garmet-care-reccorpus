import { motion } from 'framer-motion'
import styled, {css} from 'styled-components'

export type TagVariant =  'primary' | 'secondary' | 'tertiary'

interface TagContainerProps {
    variant: TagVariant
}

const tagVariants = {
    primary: '#FF5935',
    secondary: '#00D6B0',
    tertiary: '#534EE1'
}

export const TagContainer = styled(motion.button)<TagContainerProps>`
    width: 160px;
    height: 45px;
    
    background-color: ${props => props.theme.secondarybackground};
    border-radius: 10px;
    border: 0;

   // align-items: center;
    //justify-content: center;

    font-size: 1rem;
    font-weight: bold;
    margin-top: 15px;

    ${props => {
    return css
    `color: ${tagVariants[props.variant]}
    `
  } };

`   
