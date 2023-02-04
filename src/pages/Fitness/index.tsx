import { Header } from "../../components/Header";
import { TagButton } from "../../components/TagButton";
import { Container, Span,  Subtitle,  Topics, TopicsWrapper, TitleWrapper, Title, SpanTitle, Alert} from "./styles";


import imgLavagem150 from  '../../assets/150C.svg'
import imgLavagem110 from  '../../assets/110C.svg'
import imgLavagem200 from  '../../assets/200C.svg'
import imgLavagemNferro from  '../../assets/Naopassaroferro.svg'


import imgLPNlavarSeco from  '../../assets/Naolavaroseco.svg'
import imgSecarEmVaral from '../../assets/SecarEmVaral.svg'
import imgNSecarEmMaquina from '../../assets/NaoSecarMaquina.svg'
import imgLavagemNormal from '../../assets/LavagemNormal.svg'
import imgLavagemSuave from '../../assets/LavagemSuave.svg'
import imgLavagemMuitoSuave from '../../assets/LavagemMuitoSuave.svg'
import imgLavarComMaos from '../../assets/LavarComMaos.svg'
import imgNaoLavarComAgua from '../../assets/NaoLavarComAgua.svg'

import imgSecarSombra from '../../assets/SecarSombra.svg'
import imgSecarEstendidoHorizontal from '../../assets/SecarEstendidoHorizontal.svg'
import imgSecarPenduradoSemEscorrer from '../../assets/SecarPenduradoSemEscorrer.svg'
import imgSecarMaquinaEmTemperaturaBaixa from '../../assets/SecarMaquinaEmTemperaturaBaixa.svg'
import imgSecarMaquinaEmTemperaturaNormal from '../../assets/SecarMaquinaTemperaturaNormal.svg'

import imgNaoPermiteUsoAlvejante from   '../../assets/NaoPermiteUsoAlvejante.svg'
import imgNaoPermiteUsoNenhumAlvejante from '../../assets/NaoPermiteUsoNenhumAlvejante.svg'
import imgPermiteQualquerTipoAlvejante from '../../assets/PermiteQualquerTipoAlvejante.svg'

import imgLimpezaProfissional23 from '../../assets/LimpezaProfissional23.svg'
import imgLimpezaProfissional24 from '../../assets/LimpezaProfissional24.svg'
import imgLimpezaProfissional25 from '../../assets/LimpezaProfissional251.svg'
import { GarmetCare } from "../../components/GarmetCare";
import { FooterPages } from "../../components/FooterPages";

import imgLogo from '../../assets/LogoReccorpus.svg'
import ScrollToTop from "react-scroll-to-top";
import { Button } from "../../components/Button";


export function Fitness(){
    return (
        <>
            <Header         
                icon={imgLogo}
                variant="primary"
                to="/"
            />

            <TitleWrapper>
                <Title> Cuidados </Title> <Subtitle><SpanTitle>com a</SpanTitle> PEÇA</Subtitle>
                
            </TitleWrapper>

            

            <Container>
            <Button 
                        to="/Fitness"
                        title="Fitness"
                        variant="secondary"
                        textcolor='primary'
                    />

                <TopicsWrapper>
                    <Topics
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{ duration: 0.75, ease: 'easeOut', delay: 0.2 }}
                    >Lavar separadamente</Topics>
                    <Topics
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{ duration: 0.75, ease: 'easeOut', delay: 0.2 }}
                    >Não deixar de molho</Topics>
                    <Topics
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{ duration: 0.75, ease: 'easeOut', delay: 0.2 }}
                    >Retirar todo excesso de água</Topics>
                    <Topics
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{ duration: 0.75, ease: 'easeOut', delay: 0.2 }}
                    >Armazenar longe do alcance da luz</Topics>
                    <Topics
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{ duration: 0.75, ease: 'easeOut', delay: 0.2 }}
                    >Evitar contato com umidade</Topics>
                    <Topics
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{ duration: 0.75, ease: 'easeOut', delay: 0.2 }}
                    >Evite misturar com peças claras</Topics>
                    <Topics
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{ duration: 0.75, ease: 'easeOut', delay: 0.2 }}
                    >Lavar imediatamente após o uso com água abundante</Topics>
                    <Topics
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{ duration: 0.75, ease: 'easeOut', delay: 0.2 }}
                    >Evitar expor em superfícies pontiagudas ou ásperas
                    </Topics>

                </TopicsWrapper>

                <Span
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{ duration: 0.75, ease: 'easeOut', delay: 0.2 }}
                >
                     ENTENDA A SUA ETIQUETA 
                </Span>

                
                <TagButton variant="primary" variantColor="secondary" title="LAVAGEM"/>
                    <GarmetCare color="#FFF" icon={imgLavagemNormal} title="Modo de lavagem normal em máquina doméstica" />
                    <GarmetCare color="#FFF" icon={imgLavagemSuave} title="Modo de lavagem suave em máquina doméstica" />
                    <GarmetCare color="#FFF" icon={imgLavagemMuitoSuave} title="Modo de lavagem muito suave em máquina doméstica" />
                    <Alert>Atenção sempre a temperatura máxima de lavagem indicada na peça</Alert>
                    <GarmetCare color="#FFF" icon={imgLavarComMaos} title="Lavar exclusivamente à mão, temperatura máxima de lavagem 40°C " />
                    <GarmetCare color="#FFF" icon={imgNaoLavarComAgua} title="Não lavar com água" />
               
                <TagButton variant="primary" variantColor="secondary" title="ALVEJAMENTO"/>
                    <GarmetCare color="#FFF" icon={imgPermiteQualquerTipoAlvejante} title="Permite o uso de qualquer tipo de alvejante, mesmo os clorados" />
                    <GarmetCare color="#FFF" icon={imgNaoPermiteUsoNenhumAlvejante} title="Não permite o uso de alvejante clorado" />
                    <GarmetCare color="#FFF" icon={imgNaoPermiteUsoAlvejante} title="Não permite o uso de nenhum tipo de alvejante" />

                <TagButton variant="primary" variantColor="secondary" title="PASSADORIA"/>
                    <GarmetCare color="#FFF" icon={imgLavagem200} title="Passar em temperatura máxima de 200°C" />
                    <GarmetCare color="#FFF" icon={imgLavagem150} title="Passar em temperatura máxima de 150°C" />
                    <GarmetCare color="#FFF" icon={imgLavagem110} title="Passar em temperatura máxima de 110°C" />
                    <GarmetCare color="#FFF" icon={imgLavagemNferro} title="Não passar ferro" />

                <TagButton variant="primary" variantColor="secondary" title="SECAGEM"/>
                    <GarmetCare color="#FFF" icon={imgSecarMaquinaEmTemperaturaNormal} title="Secar à máquina em temperatura normal" />
                    <GarmetCare color="#FFF" icon={imgSecarMaquinaEmTemperaturaBaixa} title="Secar à máquina em temperatura baixa" />
                    <GarmetCare color="#FFF" icon={imgNSecarEmMaquina} title="Não secar à máquina" />
                    <GarmetCare color="#FFF" icon={imgSecarEmVaral} title="Secar em varal" />
                    <GarmetCare color="#FFF" icon={imgSecarPenduradoSemEscorrer} title="Secar pendurado sem escorrer" />
                    <GarmetCare color="#FFF" icon={imgSecarEstendidoHorizontal} title="Secar estendido horizontalmente" />
                    <GarmetCare color="#FFF" icon={imgSecarSombra} title="Secar à sombra" />

                <TagButton variant="primary" variantColor="secondary" title="LIMPEZA PROFISSIONAL"/>
                    <GarmetCare color="#FFF" icon={imgLimpezaProfissional25}  title="As letras dentro do circulo indicam o tipo de limpeza profissional (seca ou úmida) e de solvente adequado a cada peça" />
                    <GarmetCare color="#FFF" icon={imgLimpezaProfissional24} title="As letras abaixo do círculo (ou a falta dela), indica o processo de limpeza profissional: normal, suave ou muito suave"/>
                    <GarmetCare color="#FFF" icon={imgLimpezaProfissional23} title="As letras abaixo do círculo (ou a falta dela), indica o processo de limpeza profissional: normal, suave ou muito suave" />
                    <GarmetCare color="#FFF"icon={imgLPNlavarSeco} title="Não lavar à seco" />
            </Container>

            <FooterPages 
                variant="primary"
                icon={imgLogo}
            />

            <ScrollToTop 
                smooth 
                top={300} 
                color="#C81417"
                style = {{ opacity: 0.5 }}
            /> 
        </>
    )
}