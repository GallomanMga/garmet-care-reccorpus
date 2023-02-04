import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'


import { Container, Span, Subtitle, Title, TitleWrapper } from './styles'
import imgLogo from '../../assets/LogoReccorpus.svg'


export function Home(){

    return (
        <>
            <Header 
                icon={imgLogo}
                variant="primary" 
                to="/"
            />
            <TitleWrapper>
            <Title> Cuidados </Title> <Subtitle><Span>com a</Span> PEÇA</Subtitle>
            </TitleWrapper>
            
            <Container>
                <Button 
                    to="/Fitness"
                    title="Fitness"
                    variant="primary"
                    textcolor='secondary'
                />
                <Button 
                    to="/Beach"
                    title="Beach"
                    variant="secondary"
                    textcolor='primary'
                />
               
                <Footer /> 

            </Container>            
        </>
    )
}