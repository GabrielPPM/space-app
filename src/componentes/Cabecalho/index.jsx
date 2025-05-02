import styled from "styled-components"
import SearchBar from "../SearchBar"

const HeaderEstilizado = styled.header`
    display: flex;
    place-items: center;
    width: 100%;
    justify-content: space-between;
    img{
        max-width: 212px
    }
    SearchBar{
        place-self: end;
    }
`

const Cabecalho = () => {
    return (
        <HeaderEstilizado>
            <img src="/imagens/logo.png" alt='logo'></img>
            <SearchBar />
        </HeaderEstilizado>
    )
}

export default Cabecalho