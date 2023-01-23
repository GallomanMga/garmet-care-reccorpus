import { useNavigate } from 'react-router-dom'
import { ButtonContainer, ButtonVariant, ButtonWrapper } from "./styles";


interface ButtonProps {
    onClick?: () => void;
    title: string;
    variant?: ButtonVariant;
    icon?: string;
    to: string;
}

export function Button({
    onClick,
    title,
    variant = 'primary',
    icon,
    to
}: ButtonProps) {
    const navigate = useNavigate()

    return(
        <ButtonWrapper>
                <ButtonContainer
                    variant={variant}
                    onClick={() => {
                        if (onClick)
                        onClick()
                        navigate(to)
                    }}  
                >
                    {icon && <img src={icon} alt="" />}
                    {title}    
                </ButtonContainer>
            
        </ButtonWrapper>
    )
}