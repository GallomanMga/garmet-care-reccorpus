import { Container, HeaderVariant } from "./styles";

import imgLogo1 from '../../assets/CuidadosComPeca.svg'

interface HeaderProps {
    variant: HeaderVariant
}

export function Header({variant = 'main'}: HeaderProps) {
    return(
        <Container
            variant={variant}
        >
           <img src={imgLogo1} alt="" />
        </Container>
        
    )
}