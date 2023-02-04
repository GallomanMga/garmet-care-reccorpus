import { Container, HeaderVariant } from "./styles";


import { useNavigate } from "react-router-dom";

interface HeaderProps {
    onClick?: () => void;
    variant: HeaderVariant;
    icon?: string;
    to: string;

}

export function Header({
    variant, 
    to, 
    onClick,  
    icon 
}: HeaderProps) {
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
        {icon && <img src={icon} alt="" />}  
        </Container>
        
    )
}