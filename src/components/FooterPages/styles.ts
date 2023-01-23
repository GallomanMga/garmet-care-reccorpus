import { motion } from 'framer-motion'
import styled, {css} from 'styled-components'

export type FooterPagesVariant = 'primary' | 'secondary' | 'tertiary'

interface FooterPagesContainerProps {
    variant: FooterPagesVariant
}

const footerPagesVariants = {
    primary: '#FF5935',
    secondary: '#00D6B0',
    tertiary: '#534EE1'
}

export const Container = styled.div<FooterPagesContainerProps>`
    display: flex;
    
    align-items: center;
    justify-content: center;    
    padding: 5rem;

    ${props => {
    return css
    `background-color: ${footerPagesVariants[props.variant]}
    `
  } };

    img {
        width: 300px;
        height: 300px;
    }
`