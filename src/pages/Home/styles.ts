import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100Vh;
  padding: 3rem;

  background-color: ${props => props.theme.primary};
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  background-color: ${props => props.theme.primary};

`

export const Title = styled.h1`
  font-family: ${props => props.theme.Uniform};
  color: ${props => props.theme.secondary};
  font-size: 3rem;
`

export const Subtitle = styled.h2`
  font-family: ${props => props.theme.UniformUltra};
  color: ${props => props.theme.secondary};
  font-size: 3rem;
`

export const Span = styled.span`
font-family: ${props => props.theme.Uniform};
 font-size: 2rem;
`