import styled from "styled-components";

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	width: 32rem;
	height: auto;

	img {
		border-radius: 1rem 1rem 0rem 0rem;
		width: 100%;
		height: 20rem;
		object-fit: fill;
	}

	.bottom-card {
		display: flex;
		height: 5rem;
		width: 100%;
		border-radius: 0rem 0rem 1rem 1rem;
		background-color: #001634;
		align-items: center;
	}
	.texto-container {
		margin: 0 1.5rem;
	}
`;

const Imagem = ({ nome, foto }) => {
	return (
		<StyledDiv>
			<img src={foto.path}  />
			<div className="bottom-card">
				<div className="texto-container">
					<p>{nome.titulo}</p>
					<p>{foto.path}</p>
				</div>
				<div>
					<img src="" alt="" />
					<img src="" alt="" />
				</div>
				<div>
					
				</div>
			</div>
		</StyledDiv>
	);
};

export default Imagem;
