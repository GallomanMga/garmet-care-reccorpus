import { Container } from "./styles";

import imgLogo1 from '../../assets/Cliquenapeca.svg'

export function Footer() {
    return(
        <Container>
           <img src={imgLogo1} alt="" />
           Selecione seu Estilo
        </Container>
        
    )
}