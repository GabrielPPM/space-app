import styled from "styled-components";
import Titulo from "../../../Titulo/Titulo";

const PopularesContainer = styled.div`
    p{
        font-family: GandhiSansRegular;
    }
`

const Populares = () => {
    return(
        <>
            <Titulo $alinhamento='center'>Populares:</Titulo>
        </>
    )
}

export default Populares;