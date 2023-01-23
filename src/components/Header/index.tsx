import { Container, HeaderVariant } from "./styles";

import imgLogo1 from '../../assets/CuidadosComPeca.svg'
import { useNavigate } from "react-router-dom";

interface HeaderProps {
    onClick?: () => void;
    variant: HeaderVariant
    to: string
    
}

export function Header({variant, to, onClick }: HeaderProps) {
    const navigate = useNavigate()
    return(
        <Container
            variant={variant}
            onClick={() => {
                if (onClick)
                onClick()
                navigate(to)
            }}  
        >
           <img src={imgLogo1} alt="" />
        </Container>
        
    )
}