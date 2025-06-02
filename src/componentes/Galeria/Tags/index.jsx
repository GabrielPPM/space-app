import styled from "styled-components";
import tags from "./tags.json";

const TagContainer = styled.div`
	display: flex;
	color: white;
	font-size: 1.3rem;

	gap: 2rem;
	align-items: center;
	.background-tag {
		background-color: rgba(217, 217, 217, 0.3);
		border-radius: 0.5rem;
	}
`;

const Tag = styled.button`
	font-weight: ${(props) => (props.id === 0 ? "bold" : 0)};
	background: ${(props) =>
		props.id === 0 ? "-webkit-linear-gradient(#c98cf1 25%, #7b78e5 100%)" : ""};
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: ${(props) =>
		props.id === 0 ? "transparent" : "#ffffff"};
	/* #C98CF1  #7B78E5  0% to 100%*/
	padding: 0.5rem 0.5rem;
	border-radius: 0.5rem;
	border: ${(props) => (props.id === 0 ? "0.23rem solid #C98CF1" : "0")};
	background-color: rgba(217, 217, 217, 0.3);
	&:hover {
		border-radius: 0.5rem;
		border: 0.23rem solid #c98cf1;
	}
`;

const Tags = () => {
	return (
		<TagContainer>
			<p>Busque por tags: </p>
			{tags.map((tag) => (
				<div className="background-tag" key={tag.id}>
					<Tag key={tag.id} id={tag.id}>
						{tag.titulo}
					</Tag>
				</div>
			))}
		</TagContainer>
	);
};

export default Tags;
