import { Container, Content, Icon } from "./style";

interface GarmetCareProps {
    icon: string;
    title?: string;
    color:string;
}


export function GarmetCare({ icon, title, color}: GarmetCareProps ){
return(
    
    <Container>
        
            <Icon color={color} src={icon} />
            
        
            <Content
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{ duration: 0.75, ease: 'easeOut', delay: 0.2 }}
             >
                {title}
             </Content>
        </Container>  
       
        
       
    )
}