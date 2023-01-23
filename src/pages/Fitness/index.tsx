import { Header } from "../../components/Header";
import { TagButton } from "../../components/TagButton";
import { Container } from "./styles";


import imgLavagem150 from  '../../assets/150C.svg'
import imgLavagem110 from  '../../assets/110C.svg'
import imgLavagem200 from  '../../assets/200C.svg'
import imgLavagemNferro from  '../../assets/naopassaroferro.svg'


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

export function Fitness(){
    return (
        <>
        <Header variant="primary"/>
            <Container>
                <li>Lavar separadamente</li>
                <li>Não deixar de molho</li>
                <li>Retirar todo excesso de água</li>
                <li>Armazenar longe do alcance da luz</li>
                <li>Evitar contato com umidade</li>
                <li>Evite misturar com peças claras</li>
                <li>lavar imediatamente após o uso com água abundante</li>
                <li>Evitar expor em superfícies pontiagudas ou ásperas</li>

                <span> ENTENDA A SUA ETIQUETA </span>

                
                <TagButton variant="primary" title="LAVAGEM"/>
                    <GarmetCare icon={imgLavagemNormal} title="Modo de lavagem normal em máquina doméstica" />
                    <GarmetCare icon={imgLavagemSuave} title="Modo de lavagem suave em máquina doméstica" />
                    <GarmetCare icon={imgLavagemMuitoSuave} title="Modo de lavagem muito suave em máquina doméstica" />

                    <GarmetCare icon={imgLavarComMaos} title="Lavar exclusivamente à mão, temperatura máxima de lavagem 40°C " />
                    <GarmetCare icon={imgNaoLavarComAgua} title="Não lavar com água" />
               
                <TagButton variant="primary" title="ALVEJAMENTO"/>
                    <GarmetCare icon={imgPermiteQualquerTipoAlvejante} title="Permite o uso de qualquer tipo de alvejante, mesmo os clorados" />
                    <GarmetCare icon={imgNaoPermiteUsoNenhumAlvejante} title="Não permite o uso de alvejante clorado" />
                    <GarmetCare icon={imgNaoPermiteUsoAlvejante} title="Não permite o uso de nenhum tipo de alvejante" />

                <TagButton variant="primary" title="PASSADORIA"/>
                    <GarmetCare icon={imgLavagem200} title="Passar em temperatura máxima de 200°C" />
                    <GarmetCare icon={imgLavagem150} title="Passar em temperatura máxima de 150°C" />
                    <GarmetCare icon={imgLavagem110} title="Passar em temperatura máxima de 110°C" />
                    <GarmetCare icon={imgLavagemNferro} title="Não passar ferro" />

                <TagButton variant="primary" title="SECAGEM"/>
                    <GarmetCare icon={imgSecarMaquinaEmTemperaturaNormal} title="Secar à máquina em temperatura normal" />
                    <GarmetCare icon={imgSecarMaquinaEmTemperaturaBaixa} title="Secar à máquina em temperatura baixa" />
                    <GarmetCare icon={imgNSecarEmMaquina} title="Não secar à máquina" />
                    <GarmetCare icon={imgSecarEmVaral} title="Secar em varal" />
                    <GarmetCare icon={imgSecarPenduradoSemEscorrer} title="Secar pendurado sem escorrer" />
                    <GarmetCare icon={imgSecarEstendidoHorizontal} title="Secar estendido horizontalmente" />
                    <GarmetCare icon={imgSecarSombra} title="Secar à sombra" />

                <TagButton variant="primary" title="LIMPEZA PROFISSIONAL"/>
                    <GarmetCare icon={imgLimpezaProfissional25}  title="As letras dentro do circulo indicam o tipo de limpeza profissional (seca ou úmida) e de solvente adequado a cada peça" />
                    <GarmetCare icon={imgLimpezaProfissional24} title="As letras abaixo do círculo (ou a falta dela), indica o processo de limpeza profissional: normal, suave ou muito suave"/>
                    <GarmetCare icon={imgLimpezaProfissional23} title="As letras abaixo do círculo (ou a falta dela), indica o processo de limpeza profissional: normal, suave ou muito suave" />
                    <GarmetCare icon={imgLPNlavarSeco} title="Não lavar à seco" />
            </Container>
        </>
    )
}