import styled from "styled-components";
import Titulo from "../Titulo/Titulo";
import Tags from "./Tags";
import Populares from "./Tags/Populares";
import Imagem from "./Imagem";

const GaleriaStyled = styled.section`
	display: flex;
	color: white;
`;

const SecaoFluida = styled.div`
	display: flex;
	flex-grow: 1;
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
	.container-galeria {
		width: 100%;
	}
	.container-imagens {
		display: inline-flex;
		flex-wrap: wrap;
		gap: 1rem;
	}
`;

const Galeria = ({ fotos = [], aoFotoSelecionada }) => {
	return (
		<>
			<Tags />
			<GaleriaStyled>
				<SecaoFluida>
					<div className="container-galeria">
						<Titulo>Navegue pela galeria</Titulo>
						<div className="container-imagens">
							{fotos.map((foto) => (
								<Imagem key={foto.id} aoZoomSolicitado={aoFotoSelecionada} foto={foto} />
							))}
						</div>
					</div>
					<Populares />
				</SecaoFluida>
			</GaleriaStyled>
		</>
	);
};

export default Galeria;
