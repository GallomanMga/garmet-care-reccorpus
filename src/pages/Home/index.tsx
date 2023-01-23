import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

import { Container } from './styles'

import imgLogo1 from '../../assets/beachBt.svg'
import imgLogo2 from '../../assets/fitnessBt.svg'

export function Home(){

    return (
        <>
            <Header variant="main"/>
            
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
            </Container>

            <Footer />
            
            
        </>
    )
}