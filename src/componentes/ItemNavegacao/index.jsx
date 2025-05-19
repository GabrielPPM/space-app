import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    object-position: center;
    gap: 1rem;
    img{
        width: 2rem;
        height: 2rem;
    }
    li{
        font-family: ${ props => props.ativo ? 'GandhiSansBold' : 'GandhiSansRegular'};
        font-size: 1.5rem;
        line-height: 1.8rem;
        margin-bottom: 2rem;
        cursor: pointer;
        color: ${ props => props.$ativo ? '#7B78E5' : '#D9D9D9' };
    }
`


const ItemNavegacao = ({children, ativo = false, iconeAtivo, iconeInativo}) => {
    
    return(
        <StyledDiv $ativo={ativo}>
            <img src={ativo ? iconeAtivo : iconeInativo} />
            <li><a>{children}</a></li>
        </StyledDiv>
    )
}

export default ItemNavegacao;