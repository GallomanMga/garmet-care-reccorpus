import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

import { Container } from './styles'
import { ClickAnimation } from '../../components/LottieAnimation/ClickAnimation'


export function Home(){

    return (
        <>
            <Header variant="main" to="/"/>
            
            <Container>
                <Button 
                    to="/Fitness"
                    //icon={imgLogo2}
                    title="FITNESS"
                    variant="primary"
                />
                <Button 
                    to="/Beach"
                    //icon={imgLogo1}
                    title="BEACH"
                    variant="secondary"
                />
                <Button 
                    to="/Kids"
                    //icon={imgLogo1}
                    title="KIDS"
                    variant="tertiary"
                />
               
                <Footer /> 
            </Container>
            
            
            
            

           
            
            
        </>
    )
}