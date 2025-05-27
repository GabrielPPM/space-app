import styled from "styled-components";
import Titulo from "../Titulo/Titulo";
import Tags from "./Tags";
import Populares from "./Tags/Populares";
import Imagem from "./Imagem/Imagem";

const GaleriaStyled = styled.section`
	display: flex;
	color: white;
`;

const SecaoFluida = styled.div`
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	width: 100%;
	justify-content: space-between;
`

const Galeria = ({fotos = []}) => {
	return (
		<>
			<Tags />
			<GaleriaStyled>
				<SecaoFluida>
					<Titulo>Navegue pela galeria</Titulo>
					{fotos.map( (foto, index) => <Imagem key={index} foto={foto.path}/>)}
					<Populares />
				</SecaoFluida>
			</GaleriaStyled>
		</>
	);
};

export default Galeria;
