import styled from "styled-components";
import Titulo from "../../../Titulo/Titulo";

const PopularesContainer = styled.div`
    width: 40rem;
    p{
        font-family: GandhiSansRegular;
    }
`

const Populares = () => {
    return(
        <PopularesContainer>
            <Titulo $alinhamento='center'>Populares:</Titulo>
        </PopularesContainer>
    )
}

export default Populares;