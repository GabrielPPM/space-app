import styled from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";
import TituloEstilizado from "./componentes/TituloEstilizado";
import Galeria from "./componentes/Galeria";

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
	display: flex;
	flex-direction: column;
	flex-grow: 1;
`;

const AppContainer = styled.div`
	width: 1440px;
	margin: 0 auto;
	max-width: 100%;
`;

function App() {
	return (
		<FundoGradiente>
			<EstilosGlobais />
			<AppContainer>
				<Cabecalho />
				<MainContainer>
					<BarraLateral />
					<ConteudoDaGaleria>
						<TituloEstilizado />
						<Galeria />
					</ConteudoDaGaleria>
				</MainContainer>
			</AppContainer>
		</FundoGradiente>
	);
}

export default App;
