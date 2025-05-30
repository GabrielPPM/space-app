import styled from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";
import TituloEstilizado from "./componentes/TituloEstilizado";
import Galeria from "./componentes/Galeria";
import fotos from "./fotos.json";
import { useState } from "react";

const FundoGradiente = styled.div`
	background: linear-gradient(
		174.61deg,
		#041833 4.16%,
		#04244f 48%,
		#154580 96.76%
	);
	width: 100%;
	min-height: 100vh;
`;

const MainContainer = styled.main`
	display: flex;
	justify-content: space-around;
	width: 100%;
	gap: 24px;
`;

const ConteudoDaGaleria = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	gap: 40px;
`;

const AppContainer = styled.div`
	width: 1740px;
	margin: 0 auto;
	max-width: 90%;
`;

function App() {
	const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);

	return (
		<FundoGradiente>
			<EstilosGlobais />
			<AppContainer>
				<Cabecalho />
				<MainContainer>
					<BarraLateral />
					<ConteudoDaGaleria>
						<TituloEstilizado />
						<Galeria fotos={fotosDaGaleria} />
					</ConteudoDaGaleria>
				</MainContainer>
			</AppContainer>
		</FundoGradiente>
	);
}

export default App;
