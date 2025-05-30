import styled from "styled-components"
import SearchBar from "../SearchBar"

const HeaderEstilizado = styled.header`
    display: flex;
    width: 100%;
    place-items: center;
    justify-content: space-between;
    img{
        max-width: 212px
    }
    SearchBar{
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