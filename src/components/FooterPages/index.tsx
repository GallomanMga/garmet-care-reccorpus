import { Container, FooterPagesVariant } from "./styles";

interface FooterProps {
    variant: FooterPagesVariant;
    icon?: string;
}

export function FooterPages({ icon,  variant = 'primary', }: FooterProps) {
    return(
        <Container 
            variant={variant}
        >
           {icon && <img src={icon} alt="" />}
        </Container>
        
    )
}