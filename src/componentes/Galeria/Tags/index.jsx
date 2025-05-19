import styled from "styled-components"
import tags from "./tags.json"

const TagContainer = styled.div`
    display: flex;
    color: white;
    font-size: 1.3rem;
    font-family: GandhiSansRegular;
    gap: 2rem;
    align-items: center;
    `

const Tag = styled.button`
    color: #FFFFFF;
    padding: 0.5rem 0.5rem;
    border-radius: 0.3rem;
    border: ${props => props.id === 0 ? '0.23rem solid #C98CF1' : 0};
    background-color: rgba(217, 217, 217, 0.3);
`

const Tags = () => {
    return (
        <TagContainer>
            <p>Busque por tags: </p>
            {tags.map((tag) => <Tag key={tag.id} id={tag.id}>{tag.titulo}</Tag>)}
            
        </TagContainer>
    )
}

export default Tags;