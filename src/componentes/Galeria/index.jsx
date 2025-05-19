import styled from "styled-components";
import Titulo from "../Titulo/Titulo";
import Tags from "./Tags";
import Populares from "./Tags/Populares";

const GaleriaStyled = styled.section`
	display: flex;
	flex-direction: column;
	color: white;
`;

const SecaoFluida = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
`

const Galeria = () => {
	return (
		<>
			<Tags />
			<GaleriaStyled>
				<SecaoFluida>
					<Titulo>Navegue pela galeria</Titulo>
					<Populares />
				</SecaoFluida>
			</GaleriaStyled>
		</>
	);
};

export default Galeria;
