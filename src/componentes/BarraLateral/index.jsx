import styled from "styled-components";

const ListaEstilizada = styled.ul`
    width: 212px;
    list-style: none;
    padding: 0;
    margin: 0;
    li{
        color: white;
        text-decoration: none;
    }
`

const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ListaEstilizada>
                    <li><a>Início</a></li>
                    <li><a>Mais vistas</a></li>
                    <li><a>Curtidas</a></li>
                    <li><a>Novas</a></li>
                    <li><a>Surpreenda-me</a></li>
                </ListaEstilizada>
            </nav>
        </aside>
    )
}

export default BarraLateral;