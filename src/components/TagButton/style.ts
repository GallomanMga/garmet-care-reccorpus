import { motion } from 'framer-motion'
import styled, {css} from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export type TagVariant =  'primary' | 'secondary' | 'tertiary'


interface TagContainerProps {
    variant: TagVariant
    variantColor: TagVariant
}

const tagVariants = {
    primary: defaultTheme.primary,
    secondary: defaultTheme.secondary,   
    tertiary:defaultTheme.tertiary
}



export const TagContainer = styled(motion.button)<TagContainerProps>`
    width: 160px;
    height: 45px;

    border: 0;

    font-size: 1rem;
    font-family: ${props => props.theme.uniformbold};
    font-weight: bold;
    margin-top: 15px;

    ${props => {
    return css
    `color: ${tagVariants[props.variant]};
     background-color: ${tagVariants[props.variantColor]}
    `
  } };

`   
