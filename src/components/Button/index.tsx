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
        <ButtonWrapper
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{ duration: 0.75, ease: 'easeOut', delay: 0.2 }}
        >
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