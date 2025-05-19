import styled from "styled-components";

const SearchBarEstilizado = styled.div`
    display: flex;
    width: 30rem;
    input{
        height: 56px;
        padding: 12px 16px;
        border-radius: 10px;
        border: 2px solid;  
        border-color: #C98CF1;
        background: transparent;
        box-sizing: border-box;
        width: 566px;
        color: #D9D9D9;
        font-weight: 400;
        font-size: 20px;
        line-height: 20px;
    }
    img{
        position: relative;
        width: 2rem;
        height: 2rem;
        top: 0.7rem;
        right: 3rem;
    }
`

const SearchBar = () => {
    return(
        <SearchBarEstilizado>
            <input type="text" placeholder="O que você procura?"/>
            <img src="/imagens/search.png" />
        </SearchBarEstilizado>
    )
}

export default SearchBar;