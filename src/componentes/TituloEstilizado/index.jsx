import styled from 'styled-components';
import banner from '/src/assets/banner.png'

const StyledSection = styled.section`
    display: flex;
    width: 100%;
    height: 20rem;
    max-width: 72rem;
    background-image: url(${banner});
    align-items: center;
    border-radius: 2rem;
    h1{
        font-family: GandhiSansRegular;
        margin-left: 3rem;
        width: 14rem;
        color: white;
        font-size: 2rem;
    }
`

const TituloEstilizado = () => {
    return(
        <StyledSection>
            <h1>A galeria mais completa de fotos do espaço!</h1>
        </StyledSection>
    )
}

export default TituloEstilizado;