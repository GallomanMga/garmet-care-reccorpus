import { motion } from 'framer-motion'
import styled, {css} from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export type FooterPagesVariant = 'primary' | 'secondary' | 'tertiary'

interface FooterPagesContainerProps {
    variant: FooterPagesVariant
}

const footerPagesVariants = {
    primary: defaultTheme.primary,
    secondary: defaultTheme.secondary,   
    tertiary: defaultTheme.tertiary
}

export const Container = styled.div<FooterPagesContainerProps>`
    display: flex;
    
    align-items: center;
    justify-content: center;    
 

    ${props => {
    return css
    `background-color: ${footerPagesVariants[props.variant]}
    `
  } };

    img {
        width: 300px;
        height: 200px;
    }
`