import styled, {css} from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export type HeaderVariant =  'primary' | 'secondary' | 'tertiary'

interface HeaderContainerProps {
    variant: HeaderVariant
}

const headerVariants = {
    primary: defaultTheme.primary,
    secondary: defaultTheme.secondary ,
    tertiary: defaultTheme.tertiary
}

export const Container = styled.header<HeaderContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;
 
    ${props => {
    return css
    `background-color: ${headerVariants[props.variant]}
    `
  } };
   

    img {
        width: 200px;
        height: 150px;
        cursor: pointer;
    }

    
`