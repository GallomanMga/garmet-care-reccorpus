import { GarmetCare } from "../../components/GarmetCare";
import { Header } from "../../components/Header";
import { TagButton } from "../../components/TagButton";
import { Alert, Container, Span, SpanTitle, Subtitle, Title, TitleWrapper, Topics, TopicsWrapper } from "./styles";
import {motion } from 'framer-motion'


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

import imgLogo from '../../assets/LogoReccorpus1.svg'
import { FooterPages } from "../../components/FooterPages";
import ScrollToTop from "react-scroll-to-top";
import { Button } from "../../components/Button";


export function Beach(){
    return (
         <>
            <Header 
                icon={imgLogo}
                variant="tertiary" 
                to="/" 
            />

            <TitleWrapper>
                <Title> Cuidados </Title> <Subtitle><SpanTitle>com a</SpanTitle> PE??A</Subtitle>
                
            </TitleWrapper>
            
            <Container>
                    <Button 
                        to="/Beach"
                        title="Beach"
                        variant="primary"
                        textcolor='secondary'
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
                    >Armazenar longe do alcance da luz</Topics>
                    <Topics
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{ duration: 0.75, ease: 'easeOut', delay: 0.2 }}
                    >Evite misturar com pe??as claras</Topics>
                    <Topics
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{ duration: 0.75, ease: 'easeOut', delay: 0.2 }}
                    >lavar imediatamente ap??s o uso com ??gua abundante</Topics>
                    <Topics
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{ duration: 0.75, ease: 'easeOut', delay: 0.2 }}
                    >Evitar expor em superf??cies pontiagudas ou ??speras
                    </Topics>
                </TopicsWrapper>

                <Span
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{ duration: 0.75, ease: 'easeOut', delay: 0.2 }}
                > ENTENDA A SUA ETIQUETA </Span>
            
            
                <TagButton variant="secondary"  variantColor="primary" title="LAVAGEM"/>
                    <GarmetCare color="#C81417" icon={imgLavagemNormal} title="Modo de lavagem normal em m??quina dom??stica" />
                    <GarmetCare color="#C81417" icon={imgLavagemSuave} title="Modo de lavagem suave em m??quina dom??stica" />
                    <GarmetCare color="#C81417" icon={imgLavagemMuitoSuave} title="Modo de lavagem muito suave em m??quina dom??stica" />

                    <Alert>Aten????o sempre a temperatura m??xima de lavagem indicada na pe??a</Alert>

                    <GarmetCare color="#C81417" icon={imgLavarComMaos} title="Lavar exclusivamente ?? m??o, temperatura m??xima de lavagem 40??C " />
                    <GarmetCare color="#C81417" icon={imgNaoLavarComAgua} title="N??o lavar com ??gua" />
               
                <TagButton variant="secondary" variantColor="primary" title="ALVEJAMENTO"/>
                    <GarmetCare color="#C81417" icon={imgPermiteQualquerTipoAlvejante} title="Permite o uso de qualquer tipo de alvejante, mesmo os clorados" />
                    <GarmetCare color="#C81417" icon={imgNaoPermiteUsoNenhumAlvejante} title="N??o permite o uso de alvejante clorado" />
                    <GarmetCare color="#C81417" icon={imgNaoPermiteUsoAlvejante} title="N??o permite o uso de nenhum tipo de alvejante" />

                <TagButton variant="secondary" variantColor="primary" title="PASSADORIA"/>
                    <GarmetCare color="#C81417" icon={imgLavagem200} title="Passar em temperatura m??xima de 200??C" />
                    <GarmetCare color="#C81417" icon={imgLavagem150} title="Passar em temperatura m??xima de 150??C" />
                    <GarmetCare color="#C81417" icon={imgLavagem110} title="Passar em temperatura m??xima de 110??C" />
                    <GarmetCare color="#C81417" icon={imgLavagemNferro} title="N??o passar ferro" />

                <TagButton variant="secondary" variantColor="primary" title="SECAGEM"/>
                    <GarmetCare color="#C81417" icon={imgSecarMaquinaEmTemperaturaNormal} title="Secar ?? m??quina em temperatura normal" />
                    <GarmetCare color="#C81417" icon={imgSecarMaquinaEmTemperaturaBaixa} title="Secar ?? m??quina em temperatura baixa" />
                    <GarmetCare color="#C81417" icon={imgNSecarEmMaquina} title="N??o secar ?? m??quina" />
                    <GarmetCare color="#C81417" icon={imgSecarEmVaral} title="Secar em varal" />
                    <GarmetCare color="#C81417" icon={imgSecarPenduradoSemEscorrer} title="Secar pendurado sem escorrer" />
                    <GarmetCare color="#C81417" icon={imgSecarEstendidoHorizontal} title="Secar estendido horizontalmente" />
                    <GarmetCare color="#C81417" icon={imgSecarSombra} title="Secar ?? sombra" />

                <TagButton variant="secondary" variantColor="primary" title="LIMPEZA PROFISSIONAL"/>
                    <GarmetCare color="#C81417" icon={imgLimpezaProfissional25}  title="As letras dentro do circulo indicam o tipo de limpeza profissional (seca ou ??mida) e de solvente adequado a cada pe??a" />
                    <GarmetCare color="#C81417" icon={imgLimpezaProfissional24} title="As letras abaixo do c??rculo (ou a falta dela), indica o processo de limpeza profissional: normal, suave ou muito suave"/>
                    <GarmetCare color="#C81417" icon={imgLimpezaProfissional23} title="As letras abaixo do c??rculo (ou a falta dela), indica o processo de limpeza profissional: normal, suave ou muito suave" />
                    <GarmetCare color="#C81417" icon={imgLPNlavarSeco} title="N??o lavar ?? seco" />
            
             
            </Container>

            <FooterPages 
                variant="tertiary"
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