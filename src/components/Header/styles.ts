import styled, {css} from 'styled-components'

export type HeaderVariant = 'main' | 'primary' | 'secondary' | 'tertiary'

interface HeaderContainerProps {
    variant: HeaderVariant
}

const headerVariants = {
    main: '#C9C9C9',
    primary: '#FF5935',
    secondary: '#00D6B0',
    tertiary: '#534EE1'
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