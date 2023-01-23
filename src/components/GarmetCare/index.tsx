import { Container, Content, Icon, WrapperContainer } from "./style";

interface GarmetCareProps {
    icon?: string;
    title?: string;
}


export function GarmetCare({ icon, title}: GarmetCareProps ){
    return(
        <WrapperContainer>
        <Container>
            
             <Icon src={icon} alt="" />
             
         
             <Content>
                {title}
             </Content>
        </Container>  
        </WrapperContainer>
        
       
    )
}