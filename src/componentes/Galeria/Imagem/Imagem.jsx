import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 25rem;
    height: auto;
    
    img{
        border-radius: 1rem;
        width: 100%;
    }

    div{
        height: 3rem;
        width: 100%;
        background-color: rebeccapurple;
    }
`

const Imagem = ({ foto }) => {
    return(
        <StyledDiv>
            <img src={foto}/>
            <div></div>
        </StyledDiv>
    )
}

export default Imagem;