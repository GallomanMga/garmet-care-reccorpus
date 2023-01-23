import { Container } from "./styles";

import imgLogo1 from '../../assets/Cliquenapeca.svg'
import { ClickAnimation } from "../LottieAnimation/ClickAnimation";
import { WrapperContainer } from "../GarmetCare/style";



export function Footer() {
    return(
        <>

        
        <Container
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{ duration: 0.75, ease: 'easeOut', delay: 0.2 }}
        >
            Clique no Modelo 
        </Container>
        
  
        </>
        
    )
}

// <img src={imgLogo1} alt="" />