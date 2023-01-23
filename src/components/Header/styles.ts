import styled, {css} from 'styled-components'

export type HeaderVariant = 'main' | 'primary' | 'secondary'

interface HeaderContainerProps {
    variant: HeaderVariant
}

const headerVariants = {
    main: '#C9C9C9',
    primary: '#FF5935',
    secondary: '#00D6B0'
}

export const Container = styled.header<HeaderContainerProps>`
    display: flex;
    width: 100%;
    height:20rem;

    align-items: center;
    justify-content: center;
 
    ${props => {
    return css
    `background-color: ${headerVariants[props.variant]}
    `
  } };
    //background-color: ${props => props.theme.mainbackground};

    img {
        width: 500px;
        height: 150px;
    }
`